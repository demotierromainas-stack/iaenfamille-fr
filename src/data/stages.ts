import {
  BedDouble,
  CalendarDays,
  HeartHandshake,
  Plane,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Utensils,
  type LucideIcon,
} from "lucide-react";

/**
 * Contenu rédigé à partir de ce que la home annonce (séjours de 4 jours,
 * ateliers en famille, encadrement bienveillant). Pas de maquette pour
 * cette page : tarifs et dates sont volontairement absents tant que le
 * client ne les a pas communiqués — voir docs/a-valider-client.md.
 */

export const principeStage: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: CalendarDays,
    titre: "Quatre jours",
    texte:
      "Un format court et intense : le temps de créer vraiment quelque chose, sans empiéter sur les vacances.",
  },
  {
    icon: UsersRound,
    titre: "Parents et enfants",
    texte:
      "Tout le monde participe. Les ateliers alternent moments communs et groupes par âge.",
  },
  {
    icon: HeartHandshake,
    titre: "Petits groupes",
    texte:
      "Une poignée de familles seulement, pour que chacun reparte avec ses projets terminés.",
  },
  {
    icon: Sparkles,
    titre: "Des lieux d'exception",
    texte:
      "Des villas et maisons choisies pour qu'on ait envie d'y rester après l'atelier.",
  },
];

/** Déroulé d'une journée type, affiché en frise. */
export const journeeType: { heure: string; titre: string; texte: string }[] = [
  {
    heure: "9 h 00",
    titre: "Atelier en famille",
    texte:
      "On démarre ensemble autour d'un projet commun : une histoire, une image, un petit jeu.",
  },
  {
    heure: "11 h 00",
    titre: "Ateliers par âge",
    texte:
      "Les enfants créent avec leurs animateurs, les parents approfondissent leurs propres outils.",
  },
  {
    heure: "14 h 00",
    titre: "Temps libre",
    texte:
      "Plage, piscine, visite ou sieste : l'après-midi appartient aux familles.",
  },
  {
    heure: "17 h 00",
    titre: "Restitution",
    texte:
      "Chaque famille présente ce qu'elle a créé dans la journée. C'est souvent le moment préféré.",
  },
];

export const inclus: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: BedDouble,
    titre: "Hébergement",
    texte: "Chambre familiale dans la villa du séjour.",
  },
  {
    icon: Utensils,
    titre: "Pension complète",
    texte: "Repas préparés sur place, adaptés aux enfants.",
  },
  {
    icon: Sparkles,
    titre: "Tous les ateliers",
    texte: "Matériel, licences et accompagnement compris.",
  },
  {
    icon: ShieldCheck,
    titre: "Encadrement",
    texte: "Une équipe d'animateurs formés, présente en continu.",
  },
];

export const nonInclus: string[] = [
  "Les vols et transferts jusqu'au lieu du séjour",
  "L'assurance voyage et annulation",
  "Les excursions optionnelles",
  "Les dépenses personnelles",
];

export const faqStages: { question: string; reponse: string }[] = [
  {
    question: "À partir de quel âge mon enfant peut-il participer ?",
    reponse:
      "Les stages accueillent les enfants dès 5 ans. Les ateliers sont répartis par tranche d'âge (5–8, 8–11, 12–16 ans), comme nos parcours en ligne.",
  },
  {
    question: "Faut-il déjà savoir utiliser l'IA ?",
    reponse:
      "Non, aucun prérequis. La majorité des familles découvrent tout sur place. Un ordinateur ou une tablette par famille suffit, et nous prêtons du matériel si besoin.",
  },
  {
    question: "Les parents doivent-ils participer à tous les ateliers ?",
    reponse:
      "Les ateliers du matin en famille sont le cœur du séjour. Le reste de la journée, chacun choisit : certains parents suivent leur propre parcours, d'autres profitent du lieu.",
  },
  {
    question: "Comment se passe l'encadrement des enfants ?",
    reponse:
      "Les enfants ne sont jamais seuls avec les outils. Chaque groupe d'âge a son animateur, les contenus sont filtrés et rien n'est publié en ligne sans l'accord des parents.",
  },
  {
    question: "Quand ont lieu les stages et combien coûtent-ils ?",
    reponse:
      "Les dates et tarifs de la prochaine saison sont communiqués sur demande. Écrivez-nous et nous vous envoyons le programme détaillé de la destination qui vous intéresse.",
  },
];

export const planeIcon = Plane;
