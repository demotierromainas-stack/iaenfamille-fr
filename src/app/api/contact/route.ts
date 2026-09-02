import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validerMessage, type ContactMessage } from "@/lib/contact";

/**
 * Relais d'envoi du formulaire de contact.
 *
 * Cette route existe pour que la clé Resend reste côté serveur : exposée au
 * navigateur, elle permettrait à n'importe qui d'envoyer des e-mails depuis
 * le domaine du client.
 *
 * Note : une route API est incompatible avec `output: "export"`. Pour un
 * hébergement statique (Infomaniak mutualisé), utiliser à la place le script
 * `deploy/contact.php`, qui fait le même travail en PHP.
 */

/**
 * CONTACT_TO accepte plusieurs adresses séparées par des virgules : les
 * demandes partent au client et, le temps du lancement, à l'agence.
 */
function destinataires(): string[] {
  return (process.env.CONTACT_TO ?? "")
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  const cle = process.env.RESEND_API_KEY;
  if (!cle || destinataires().length === 0) {
    return NextResponse.json(
      { erreur: "Envoi non configuré sur ce serveur." },
      { status: 503 },
    );
  }

  let corps: ContactMessage & { piege?: string };
  try {
    corps = await request.json();
  } catch {
    return NextResponse.json({ erreur: "Requête invalide." }, { status: 400 });
  }

  // Champ leurre, invisible pour un humain : s'il est rempli, c'est un robot.
  // On répond comme si tout allait bien pour ne pas le renseigner.
  if (corps.piege) {
    return NextResponse.json({ ok: true });
  }

  // La validation client peut être contournée : on refait la même ici.
  const erreurs = validerMessage(corps);
  if (Object.keys(erreurs).length > 0) {
    return NextResponse.json({ erreur: "Formulaire incomplet." }, { status: 422 });
  }

  const { nom, email, sujet, message } = corps;
  const resend = new Resend(cle);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "IA en famille <onboarding@resend.dev>",
      to: destinataires(),
      replyTo: email,
      subject: `[Site] ${sujet} — ${nom}`,
      text: [
        `Nom     : ${nom}`,
        `E-mail  : ${email}`,
        `Sujet   : ${sujet}`,
        "",
        message,
        "",
        "—",
        "Envoyé depuis le formulaire de contact de iaenfamille.fr",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend a refusé l'envoi :", error);
      return NextResponse.json(
        { erreur: "Le message n'a pas pu être envoyé." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Échec de l'appel à Resend :", e);
    return NextResponse.json(
      { erreur: "Le message n'a pas pu être envoyé." },
      { status: 502 },
    );
  }
}
