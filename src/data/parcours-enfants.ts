import {
  Eye,
  Lock,
  MessagesSquare,
  Palette,
  ScanFace,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type Atelier = { titre: string; texte: string; image: string };

export type Parcours = {
  slug: string;
  tranche: string;
  accroche: string;
  /** Avatar de l'onglet — mutualisé avec les cartes de la home. */
  avatar: string;
  /** Teinte d'accent propre à la tranche d'âge. */
  accent: "violet" | "blue" | "teal";
  ateliers: Atelier[];
};

export const parcoursEnfants: Parcours[] = [
  {
    slug: "5-8-ans",
    tranche: "5–8 ans",
    accroche: "Découvrir en jouant",
    avatar: "/images/home/age-5-8-hd.webp",
    accent: "violet",
    ateliers: [
      {
        titre: "Mon premier atelier IA",
        texte: "Découvre l'IA avec des images, des sons et des surprises !",
        image: "/images/enfants/atelier-a1-hd.webp",
      },
      {
        titre: "Histoires magiques",
        texte: "Crée des histoires illustrées avec des personnages et des décors.",
        image: "/images/enfants/atelier-a2-hd.webp",
      },
      {
        titre: "Jeux créatifs",
        texte: "Des petits jeux simples pour tester, imaginer et s'amuser.",
        image: "/images/enfants/atelier-a3-hd.webp",
      },
    ],
  },
  {
    slug: "8-11-ans",
    tranche: "8–11 ans",
    accroche: "Comprendre et créer",
    avatar: "/images/home/age-8-11-hd.webp",
    accent: "blue",
    ateliers: [
      {
        titre: "Les super-promptes",
        texte: "Apprends à bien demander à l'IA pour obtenir ce que tu veux.",
        image: "/images/enfants/atelier-b1-hd.webp",
      },
      {
        titre: "Histoires illustrées",
        texte: "Écris ton histoire et crée les images qui vont avec.",
        image: "/images/enfants/atelier-b2-hd.webp",
      },
      {
        titre: "Quiz & défis",
        texte: "Apprends en t'amusant avec des quiz interactifs et des défis.",
        image: "/images/enfants/atelier-b3-hd.webp",
      },
      {
        titre: "Mini-projets IA",
        texte: "Réalise de petits projets guidés du début à la fin.",
        image: "/images/enfants/atelier-b4-hd.webp",
      },
    ],
  },
  {
    slug: "12-16-ans",
    tranche: "12–16 ans",
    accroche: "Créer et construire",
    avatar: "/images/home/age-12-16-hd.webp",
    accent: "teal",
    ateliers: [
      {
        titre: "Création d'images avancée",
        texte: "Maîtrise les outils d'IA pour créer des visuels impressionnants.",
        image: "/images/enfants/atelier-c1-hd.webp",
      },
      {
        titre: "Projets & portfolio",
        texte: "Travaille sur des projets concrets et construis ton portfolio.",
        image: "/images/enfants/atelier-c2-hd.webp",
      },
      {
        titre: "IA & entrepreneuriat",
        texte: "Trouve des idées, crée, teste et apprends à entreprendre.",
        image: "/images/enfants/atelier-c3-hd.webp",
      },
      {
        titre: "IA responsable",
        texte: "Comprendre les enjeux, les biais et adopter les bons réflexes.",
        image: "/images/enfants/atelier-c4-hd.webp",
      },
    ],
  },
];

export function getParcours(slug: string) {
  return parcoursEnfants.find((p) => p.slug === slug);
}

/** Les trois réassurances du hero. */
export const reassurancesEnfants: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: ScanFace,
    titre: "Pédagogie adaptée",
    texte: "à chaque âge",
  },
  {
    icon: Sparkles,
    titre: "Activités ludiques",
    texte: "et concrètes",
  },
  {
    icon: ShieldCheck,
    titre: "Encadrement bienveillant",
    texte: "par des experts",
  },
];

/** « Les compétences développées » — cinq items. */
export const competences: { titre: string; texte: string; image: string }[] = [
  {
    titre: "Créativité",
    texte: "Imaginer, créer et exprimer ses idées.",
    image: "/images/enfants/skill-1-hd.webp",
  },
  {
    titre: "Esprit critique",
    texte: "Questionner, comparer et réfléchir.",
    image: "/images/enfants/skill-2-hd.webp",
  },
  {
    titre: "Expression",
    texte: "S'exprimer à l'écrit, à l'oral et en image.",
    image: "/images/enfants/skill-3-hd.webp",
  },
  {
    titre: "Culture numérique",
    texte: "Comprendre les outils et le monde numérique.",
    image: "/images/enfants/skill-4-hd.webp",
  },
  {
    titre: "Collaboration",
    texte: "Travailler ensemble, partager et co-créer.",
    image: "/images/enfants/skill-5-hd.webp",
  },
];

/** Bandeau sombre « Apprendre en toute confiance ». */
export const confiance: { icon: LucideIcon; titre: string; texte: string }[] = [
  { icon: Lock, titre: "Données", texte: "protégées" },
  { icon: UsersRound, titre: "Encadrement", texte: "par des experts" },
  { icon: Palette, titre: "Contenus adaptés", texte: "à chaque âge" },
  { icon: Eye, titre: "Respect de la vie", texte: "privée" },
];

export const messagesIcon = MessagesSquare;
