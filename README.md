# IA en famille — iaenfamille.fr

Site du projet **IA en famille** : formations à l'intelligence artificielle pour les parents,
parcours pour les enfants, et stages en présentiel en France, à l'île Maurice et à Dubaï.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — les tokens de marque sont dans [`src/app/globals.css`](src/app/globals.css)
- **Motion** (ex Framer Motion) pour les animations
- **lucide-react** pour les icônes

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

## Repères

| Chemin | Rôle |
|---|---|
| `src/app/globals.css` | Tokens de couleur, typo, utilitaires de marque |
| `src/lib/site.ts` | Navigation, libellés et identité — **modifier ici**, pas dans les pages |
| `src/data/` | Contenu éditorial (offres, destinations, activités) |
| `src/components/Reveal.tsx` | Toutes les animations d'entrée passent par là |
| `src/components/PlaceholderImage.tsx` | Visuels provisoires — point de remplacement unique |
| `docs/maquettes/` | Maquettes fournies par le client |

## État

**V1 — site vitrine.** Les visuels sont des placeholders en attendant les photos du client.
L'espace membre, le paiement des formations (99 € / pack 499 €) et l'envoi réel des
formulaires sont prévus en V2.
