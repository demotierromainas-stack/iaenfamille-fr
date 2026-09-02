# Déploiement

## Aperçu client — Netlify (actuel)

```bash
npx netlify-cli deploy --build --prod
```

Variables à définir dans Netlify → Project settings → Environment variables :

| Variable | Valeur |
|---|---|
| `RESEND_API_KEY` | la clé Resend |
| `CONTACT_FROM` | `IA en famille <contact@iaenfamille.fr>` |
| `CONTACT_TO` | l'adresse qui reçoit les demandes |
| `NEXT_PUBLIC_ALLOW_INDEXING` | à ne définir qu'en production, sur `true` |

## Production — Infomaniak

Deux montages possibles, selon l'offre souscrite.

### A. L'offre fait tourner Node.js

Rien à changer : `npm run build` puis `npm start`. La route `/api/contact`
gère l'envoi, les images sont optimisées à la volée.

### B. Hébergement mutualisé, sans Node.js

Passer le site en fichiers statiques — il s'y prête, aucune page n'a besoin
d'un serveur :

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

`npm run build` produit alors un dossier `out/` (~8 Mo, 30 pages) à déposer
en FTP.

Une route API ne survit pas à l'export statique : déposer `contact.php` à la
racine du site, avec à côté un fichier `.env` :

```ini
RESEND_API_KEY=...
CONTACT_FROM=IA en famille <contact@iaenfamille.fr>
CONTACT_TO=...
```

Puis, avant le build, pointer le formulaire vers lui :

```ini
# .env.local
NEXT_PUBLIC_CONTACT_ENDPOINT=https://iaenfamille.fr/contact.php
```

Protéger `.env` d'un accès direct, par exemple dans `.htaccess` :

```apache
<Files ".env">
  Require all denied
</Files>
```

## Vérifier le domaine chez Resend

Le domaine `iaenfamille.fr` existe sur le compte mais son statut est
`not_started` : tant que les DNS ne sont pas posés, aucun envoi depuis
`@iaenfamille.fr` n'est possible. Enregistrements à ajouter chez le
registrar :

| Type | Nom | Valeur |
|---|---|---|
| TXT | `resend._domainkey` | la clé DKIM fournie dans le tableau de bord Resend |
| CNAME ou MX | `send` | `send.forge.rmta.net` |
| CNAME ou MX | `rsend` | `rsend-euw1.forge.rmta.net` |

Une fois vérifié, passer `CONTACT_FROM` sur une adresse `@iaenfamille.fr`.
