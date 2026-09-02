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
  /** Objectifs pédagogiques — déduits du titre, à faire valider. */
  objectifs: string[];
  /** À qui la formation s'adresse. */
  pourQui: string;
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
    objectifs: [
      "Écrire une histoire où votre enfant est le héros",
      "Générer les illustrations qui vont avec",
      "Adapter le ton et la longueur selon l'âge",
      "Constituer une petite bibliothèque familiale",
    ],
    pourQui:
      "Les parents d'enfants de 3 à 10 ans, même sans aucune expérience de l'IA.",
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
    objectifs: [
      "Configurer un compte adapté à un usage familial",
      "Reconnaître ce que l'IA invente et le vérifier",
      "Poser un cadre d'usage clair avec vos enfants",
      "Savoir quoi faire face à une réponse inappropriée",
    ],
    pourQui:
      "Les parents dont les enfants utilisent déjà l'IA, ou vont bientôt s'y mettre.",
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
    objectifs: [
      "Générer des coloriages à partir d'une simple description",
      "Obtenir un trait net, vraiment imprimable",
      "Décliner un thème en série cohérente",
      "Préparer une activité en quelques minutes",
    ],
    pourQui:
      "Les parents et grands-parents d'enfants de 3 à 8 ans.",
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
    objectifs: [
      "Préparer les repas de la semaine avec ce qu'il y a dans le frigo",
      "Gérer le calendrier familial et les activités",
      "Rédiger plus vite les courriers et démarches",
      "Automatiser ce qui revient chaque semaine",
    ],
    pourQui:
      "Les parents qui manquent de temps — donc à peu près tous.",
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
    objectifs: [
      "Faire expliquer une notion à hauteur d'enfant",
      "Générer des exercices d'entraînement supplémentaires",
      "Repérer quand l'IA se trompe sur un exercice",
      "Accompagner sans faire à la place",
    ],
    pourQui:
      "Les parents d'enfants scolarisés du CP à la troisième.",
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
    objectifs: [
      "Lancer un projet créatif à faire à plusieurs",
      "Mélanger dessin, écriture et image générée",
      "Transformer une idée d'enfant en projet abouti",
      "Garder l'enfant aux commandes de sa création",
    ],
    pourQui:
      "Les familles qui cherchent des activités à faire ensemble.",
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
    objectifs: [
      "Comprendre comment une IA produit une réponse",
      "Savoir pourquoi elle se trompe avec assurance",
      "Distinguer les usages utiles des usages risqués",
      "Répondre aux questions de vos enfants sans être pris de court",
    ],
    pourQui:
      "Les parents qui veulent comprendre avant d'utiliser.",
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
    objectifs: [
      "Décrire précisément l'image que vous avez en tête",
      "Retoucher et décliner un visuel réussi",
      "Réaliser une courte vidéo à partir d'images",
      "Créer faire-part, affiches et souvenirs de famille",
    ],
    pourQui:
      "Ceux qui ont déjà pris en main un premier outil d'IA.",
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
