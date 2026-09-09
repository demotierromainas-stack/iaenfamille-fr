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

/**
 * Cours en visio pour les enfants, avec un animateur. Libellé tranché par le
 * client : « Cours en ligne », malgré la proximité avec les formations
 * enregistrées, elles aussi en ligne. Même principe que STAGES_LABEL — une
 * seule ligne à changer s'il revient dessus.
 */
export const COURS_LABEL = "Cours en ligne";
export const COURS_HREF = "/cours-en-ligne";

/**
 * Communauté Skool : les formations et l'espace membre y sont hébergés plutôt
 * que sur le site, qui reste la vitrine.
 *
 * Le type est `string` et non le littéral inféré, pour que les tests de
 * présence ci-dessous restent légaux côté TypeScript.
 *
 * Si l'URL est vide, les boutons d'achat retombent sur le formulaire de
 * contact et l'entrée « Mon compte » disparaît du menu — aucun lien mort ne
 * part en ligne. La renseigner suffit à tout activer.
 */
export const SKOOL_URL: string =
  // ⚠️ PROVISOIRE — page d'accueil de Skool, pas encore la communauté.
  // À REMPLACER par l'URL réelle avant toute mise en production : un acheteur
  // qui clique « Voir le pack » atterrit aujourd'hui sur le site marketing de
  // Skool, pas sur les formations. Voir docs/a-valider-client.md.
  "https://www.skool.com/";

/** Vrai dès que la communauté existe. */
export const SKOOL_ACTIF = SKOOL_URL !== "";

/** Cible des boutons d'achat : Skool si la communauté existe, sinon contact. */
export const ACHAT_HREF = SKOOL_URL || "/contact";

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Formations parents", href: "/formations-parents" },
  { label: "Formations enfants", href: "/formations-enfants" },
  { label: COURS_LABEL, href: COURS_HREF },
  { label: STAGES_LABEL, href: STAGES_HREF },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Navigation",
    items: [
      { label: "Accueil", href: "/" },
      { label: "Formations parents", href: "/formations-parents" },
      { label: "Formations enfants", href: "/formations-enfants" },
      { label: COURS_LABEL, href: COURS_HREF },
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
