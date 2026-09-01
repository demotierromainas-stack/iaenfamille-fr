import {
  BookOpen,
  Bot,
  CalendarDays,
  GraduationCap,
  ImageIcon,
  Palette,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Niveau = "Débutant" | "Intermédiaire" | "Avancé";

export type Formation = {
  slug: string;
  titre: string;
  resume: string;
  /** Durée telle qu'affichée sur la carte. */
  duree: string;
  /** Minutes — sert au tri, la durée affichée reste `duree`. */
  minutes: number;
  niveau: Niveau;
  prix: number;
  icon: LucideIcon;
  image: string;
  /** Ordre de la maquette, utilisé par le tri « Populaires ». */
  populaire: number;
};

export const formationsParents: Formation[] = [
  {
    slug: "histoires-du-soir-personnalisees",
    titre: "Créer des histoires du soir personnalisées",
    resume:
      "Intégrez vos enfants dans des histoires uniques avec des illustrations personnalisées.",
    duree: "1 h 30 min",
    minutes: 90,
    niveau: "Débutant",
    prix: 99,
    icon: BookOpen,
    image: "/images/parents/formation-1-hd.webp",
    populaire: 1,
  },
  {
    slug: "chatgpt-en-securite",
    titre: "ChatGPT en sécurité pour mes enfants",
    resume:
      "Apprenez à configurer et utiliser ChatGPT en toute sécurité pour vos enfants.",
    duree: "1 h 10 min",
    minutes: 70,
    niveau: "Débutant",
    prix: 99,
    icon: ShieldCheck,
    image: "/images/parents/formation-2-hd.webp",
    populaire: 2,
  },
  {
    slug: "coloriages-uniques",
    titre: "Créer des coloriages uniques avec l'IA",
    resume:
      "Générez des coloriages éducatifs et personnalisés en quelques clics.",
    duree: "1 h 10 min",
    minutes: 70,
    niveau: "Débutant",
    prix: 99,
    icon: Palette,
    image: "/images/parents/formation-3-hd.webp",
    populaire: 3,
  },
  {
    slug: "organiser-le-quotidien",
    titre: "Organiser le quotidien grâce à l'IA",
    resume:
      "Gagnez du temps dans l'organisation familiale avec des outils d'IA simples.",
    duree: "1 h 15 min",
    minutes: 75,
    niveau: "Débutant",
    prix: 99,
    icon: CalendarDays,
    image: "/images/parents/formation-4-hd.webp",
    populaire: 4,
  },
  {
    slug: "aide-aux-devoirs",
    titre: "Aide aux devoirs : l'IA comme soutien",
    resume:
      "Accompagnez vos enfants dans leurs devoirs avec des explications adaptées.",
    duree: "1 h 25 min",
    minutes: 85,
    niveau: "Débutant",
    prix: 99,
    icon: GraduationCap,
    image: "/images/parents/formation-5-hd.webp",
    populaire: 5,
  },
  {
    slug: "developper-la-creativite",
    titre: "Développer la créativité en famille avec l'IA",
    resume: "Des idées d'activités créatives et ludiques à faire ensemble.",
    duree: "1 h 20 min",
    minutes: 80,
    niveau: "Débutant",
    prix: 99,
    icon: Sparkles,
    image: "/images/parents/formation-6-hd.webp",
    populaire: 6,
  },
  {
    slug: "comprendre-lia",
    titre: "Comprendre l'IA pour mieux guider",
    resume: "Les bases de l'intelligence artificielle expliquées simplement.",
    duree: "1 h 30 min",
    minutes: 90,
    niveau: "Débutant",
    prix: 99,
    icon: Bot,
    image: "/images/parents/formation-7-hd.webp",
    populaire: 7,
  },
  {
    slug: "images-et-videos-personnalisees",
    titre: "Images & vidéos personnalisées",
    resume:
      "Créez des visuels et petites vidéos uniques pour vos projets familiaux.",
    duree: "1 h 40 min",
    minutes: 100,
    niveau: "Intermédiaire",
    prix: 99,
    icon: ImageIcon,
    image: "/images/parents/formation-8-hd.webp",
    populaire: 8,
  },
];

/** Bande de quatre arguments sous le hero. */
export const argumentsParents: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: Sparkles,
    titre: "Formations concrètes",
    texte: "Des outils que vous utilisez dès aujourd'hui.",
  },
  {
    icon: CalendarDays,
    titre: "Gain de temps",
    texte: "Automatisez et simplifiez votre quotidien.",
  },
  {
    icon: Palette,
    titre: "Activités prêtes à l'emploi",
    texte: "Des ressources à refaire à la maison.",
  },
  {
    icon: GraduationCap,
    titre: "Accompagnement bienveillant",
    texte: "Une pédagogie adaptée aux parents.",
  },
];

export const packParents = {
  badge: "Meilleur choix",
  titre: "Pack Parents Ultime",
  texte: "Accédez à toutes nos formations parents à un prix avantageux.",
  avantages: [
    "8 formations complètes",
    "Accès à vie",
    "Mises à jour incluses",
    "Certificat de formation",
    "Support prioritaire",
  ],
  prixInitial: 792,
  prix: 499,
  cta: "Voir le pack",
} as const;

/** Bande de réassurance en pied de page. */
export const garantiesParents: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: BookOpen,
    titre: "Accès à vie",
    texte: "Revoyez les contenus quand vous voulez.",
  },
  {
    icon: Sparkles,
    titre: "Mises à jour incluses",
    texte: "Contenus actualisés régulièrement.",
  },
  {
    icon: ShieldCheck,
    titre: "Paiement sécurisé",
    texte: "Transaction 100 % sécurisée.",
  },
  {
    icon: GraduationCap,
    titre: "Satisfait ou remboursé",
    texte: "30 jours pour changer d'avis.",
  },
];
