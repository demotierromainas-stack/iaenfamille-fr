/**
 * Source unique de vérité pour l'identité du site, la navigation et les
 * libellés qui reviennent partout. Modifier ici plutôt que dans les pages.
 */

export const site = {
  name: "IA en famille",
  domain: "iaenfamille.fr",
  url: "https://iaenfamille.fr",
  tagline: "Le site de référence en apprentissage de l'IA pour les familles",
  description:
    "L'IA à vivre en famille : formations pour les parents, parcours pour les enfants et stages en présentiel dans des lieux d'exception.",
  /**
   * Adresse affichée publiquement, y compris sur les pages légales où elle
   * vaut contact de l'éditeur. Distincte de l'expéditeur du formulaire
   * (CONTACT_FROM), qui reste contact@iaenfamille.fr.
   */
  email: "jm.hanny@icloud.com",
} as const;

/**
 * Rendu du logo : "image" utilise le médaillon fourni par le client,
 * "vector" le sigle redessiné. Bascule d'une ligne pour comparer.
 */
export const LOGO_MODE: "image" | "vector" = "vector";

/**
 * Le client hésite encore entre « Stages en présentiel » et « Stages en villa »
 * (les deux apparaissent dans les maquettes). Tout passe par cette constante :
 * un seul changement ici met à jour la nav, les cartes et les CTA.
 */
export const STAGES_LABEL = "Stages en présentiel";
export const STAGES_HREF = "/stages-en-presentiel";

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Formations parents", href: "/formations-parents" },
  { label: "Formations enfants", href: "/formations-enfants" },
  { label: STAGES_LABEL, href: STAGES_HREF },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Navigation",
    items: [
      { label: "Accueil", href: "/" },
      { label: "Formations parents", href: "/formations-parents" },
      { label: "Formations enfants", href: "/formations-enfants" },
      { label: STAGES_LABEL, href: STAGES_HREF },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Ressources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Guide des parents", href: "/guide-des-parents" },
      { label: "Questions fréquentes", href: "/faq" },
      { label: "Témoignages", href: "/temoignages" },
      { label: "Mentions légales", href: "/mentions-legales" },
    ],
  },
];

export const socials: { label: string; href: string }[] = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];
