# Déploiement

Le site est un **export statique** (`output: "export"` dans `next.config.ts`) :
l'hébergement Infomaniak n'exécute pas Node.js. Le build produit un dossier
`out/` de fichiers HTML/CSS/JS, à déposer tel quel à la racine du site.

Seul élément exécuté côté serveur : `public/contact.php`, le relais PHP du
formulaire de contact (la clé Resend ne doit jamais atteindre le navigateur).

## Production — Infomaniak

### Mise en ligne automatique (GitHub Actions)

Chaque push sur `main` construit le site et l'envoie en FTP sur Infomaniak
(`.github/workflows/deploy-infomaniak.yml`). Suivi des envois : onglet
**Actions** du dépôt, ou `gh run watch` dans le terminal.

Configuration, une seule fois, depuis la racine du projet :

```bash
gh secret set FTP_SERVER --body "xxxx.ftp.infomaniak.com"   # Manager → FTP / SSH, en haut de page
gh secret set FTP_USERNAME --body "xxxx_identifiant"
gh secret set FTP_PASSWORD                                  # le mot de passe est demandé, masqué
```

Si le compte FTP est limité au dossier du site (compte « FTP uniquement »),
sa racine est déjà ce dossier :

```bash
gh variable set FTP_SERVER_DIR --body "/"
```

Relancer un envoi sans nouveau commit : `gh workflow run deploy-infomaniak.yml`.

Le `.env` de `contact.php` (étape 3) reste à créer à la main sur le serveur.

Les étapes 1 et 2 ci-dessous décrivent l'envoi manuel, utile en dépannage.

### 1. Construire

```bash
npm ci
npm run build:production   # = NEXT_PUBLIC_ALLOW_INDEXING=true next build
```

`build:production` autorise l'indexation dans `robots.txt`. **Ne jamais
envoyer en production un `out/` issu de `npm run build`** : il interdit
l'indexation par Google.

`out/` contient déjà `.htaccess` et `contact.php` (copiés depuis `public/`).

### 2. Déposer

Envoyer **le contenu** de `out/` (pas le dossier lui-même) à la racine web du
site, en SFTP ou via le gestionnaire de fichiers du Manager. Afficher les
fichiers cachés dans le client FTP : `.htaccess` commence par un point.

À chaque mise en ligne, remplacer l'ensemble : les noms des fichiers de
`_next/static/` changent d'un build à l'autre. Les anciens peuvent être
supprimés, sauf `.env` (voir ci-dessous) qui n'est pas dans `out/`.

### 3. Configurer l'envoi du formulaire (une seule fois)

Créer sur le serveur, à côté de `contact.php`, un fichier `.env` :

```ini
RESEND_API_KEY="re_..."
CONTACT_FROM="IA en famille <contact@iaenfamille.fr>"
CONTACT_TO="adresse1@exemple.fr, adresse2@exemple.fr"
```

Les guillemets sont nécessaires (`<`, `>` et `,` dans les valeurs). Le
`.htaccess` interdit l'accès aux fichiers commençant par un point : vérifier
que `https://iaenfamille.fr/.env` répond bien 403.

Ce fichier n'est jamais dans Git ni dans `out/` : il faut le conserver lors
des mises à jour.

### 4. Domaine et HTTPS (Manager Infomaniak, une seule fois)

- Rattacher `iaenfamille.fr` et `www.iaenfamille.fr` au site.
- Installer le certificat SSL (Let's Encrypt) et activer la redirection vers
  HTTPS proposée par le Manager.

### 5. Vérifier

- Parcourir les pages, y compris une URL inexistante (page 404).
- `https://iaenfamille.fr/robots.txt` doit contenir `Allow: /`.
- Envoyer un message depuis `/contact/`.

## Envoi des e-mails : vérifier le domaine chez Resend

Tant que `iaenfamille.fr` n'est pas vérifié chez Resend, aucun envoi depuis
`@iaenfamille.fr` n'est possible. Dans la zone DNS du domaine (Manager
Infomaniak), ajouter les enregistrements donnés par le tableau de bord Resend :

| Type | Nom | Valeur |
|---|---|---|
| TXT | `resend._domainkey` | la clé DKIM fournie dans le tableau de bord Resend |
| CNAME ou MX | `send` | `send.forge.rmta.net` |
| CNAME ou MX | `rsend` | `rsend-euw1.forge.rmta.net` |

Une fois vérifié, `CONTACT_FROM` peut utiliser une adresse `@iaenfamille.fr`.

Ces enregistrements portent sur des sous-domaines : ils ne touchent pas à la
messagerie Infomaniak du domaine.

## Aperçu client — Netlify

Netlify publie le même export statique (`publish = "out"`). `contact.php` ne
s'y exécute pas : le formulaire n'envoie rien sur l'aperçu. Ne pas définir
`NEXT_PUBLIC_ALLOW_INDEXING` sur Netlify, pour que l'aperçu reste non indexé.
