<?php
/**
 * Relais d'envoi du formulaire de contact. Le site est un export statique
 * (Infomaniak sans Node.js) : c'est ce script PHP qui reçoit le formulaire et
 * appelle Resend, pour que la clé reste sur le serveur, jamais dans le
 * navigateur.
 *
 * Placé dans public/, il est copié à la racine de out/ à chaque build.
 *
 * La clé se met dans un fichier .env à côté, créé directement sur le serveur
 * (jamais dans Git) et protégé par le .htaccess. Ne jamais l'écrire en dur ici.
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['erreur' => 'Méthode non autorisée.']);
    exit;
}

// --- configuration ---------------------------------------------------------
// Le .env suit la convention habituelle (commentaires en #), que le format
// INI de PHP refuse : on retire ces lignes avant de l'analyser. Les erreurs
// restent silencieuses, un avertissement affiché exposerait le chemin du
// serveur ; un .env absent ou illisible revient à « non configuré ».
$fichier = __DIR__ . '/.env';
$config  = [];
if (is_readable($fichier)) {
    $lignes = preg_grep('/^\s*#/', file($fichier, FILE_IGNORE_NEW_LINES) ?: [], PREG_GREP_INVERT);
    $config = @parse_ini_string(implode("\n", $lignes)) ?: [];
}
$cle  = $config['RESEND_API_KEY']  ?? '';
$from = $config['CONTACT_FROM']    ?? 'IA en famille <contact@iaenfamille.fr>';
// CONTACT_TO accepte plusieurs adresses séparées par des virgules.
$to   = array_values(array_filter(array_map('trim',
            explode(',', $config['CONTACT_TO'] ?? ''))));

if ($cle === '' || count($to) === 0) {
    http_response_code(503);
    echo json_encode(['erreur' => "Envoi non configuré sur ce serveur."]);
    exit;
}

// --- lecture et validation -------------------------------------------------
$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['erreur' => 'Requête invalide.']);
    exit;
}

// Champ leurre : rempli uniquement par les robots. On répond comme si tout
// allait bien, pour ne pas leur indiquer qu'ils ont été repérés.
if (!empty($data['piege'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$nom     = trim($data['nom']     ?? '');
$email   = trim($data['email']   ?? '');
$sujet   = trim($data['sujet']   ?? '');
$message = trim($data['message'] ?? '');

// La validation du navigateur peut être contournée : on la refait ici.
if (mb_strlen($nom) < 2
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || $sujet === ''
    || mb_strlen($message) < 10) {
    http_response_code(422);
    echo json_encode(['erreur' => 'Formulaire incomplet.']);
    exit;
}

// --- envoi via l'API Resend ------------------------------------------------
$corps = [
    'from'     => $from,
    'to'       => $to,
    'reply_to' => $email,
    'subject'  => "[Site] $sujet — $nom",
    'text'     => "Nom     : $nom\n"
                . "E-mail  : $email\n"
                . "Sujet   : $sujet\n\n"
                . "$message\n\n"
                . "—\nEnvoyé depuis le formulaire de contact de iaenfamille.fr",
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $cle,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS     => json_encode($corps, JSON_UNESCAPED_UNICODE),
]);
$reponse = curl_exec($ch);
$code    = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($code < 200 || $code >= 300) {
    error_log("Resend a refusé l'envoi (HTTP $code) : $reponse");
    http_response_code(502);
    echo json_encode(['erreur' => "Le message n'a pas pu être envoyé."]);
    exit;
}

echo json_encode(['ok' => true]);
