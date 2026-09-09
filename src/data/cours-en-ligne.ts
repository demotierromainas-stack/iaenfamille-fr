import {
  CalendarDays,
  GraduationCap,
  Monitor,
  MonitorPlay,
  ShieldCheck,
  TrendingUp,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

/**
 * Cours en visio pour les enfants, avec un formateur.
 *
 * Contenu repris de la maquette fournie par le client : c'est elle qui
 * apporte enfin les tarifs et la taille des groupes, absents jusque-là.
 *
 * Deux écarts assumés par rapport à cette maquette, décidés avec le client —
 * voir docs/a-valider-client.md :
 *  - elle annonce « pour enfants et parents » ; le périmètre reste les
 *    enfants, les parents gardant les formations enregistrées ;
 *  - les boutons « Réserver » mènent au formulaire de contact, la
 *    réservation n'étant pas automatisée.
 */

/** Les cinq réassurances alignées sous le titre du hero. */
export const reassurancesCours: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: GraduationCap,
    titre: "Des formateurs experts",
    texte: "en IA et en pédagogie",
  },
  {
    icon: UsersRound,
    titre: "Dès 5 ans",
    texte: "et jusqu'aux ados",
  },
  {
    icon: CalendarDays,
    titre: "Horaires flexibles",
    texte: "en journée, en soirée ou le week-end",
  },
  {
    icon: Monitor,
    titre: "100 % en ligne",
    texte: "depuis chez vous",
  },
  {
    icon: ShieldCheck,
    titre: "Un cadre sécurisé",
    texte: "et bienveillant",
  },
];

export type Formule = {
  slug: "individuel" | "groupe";
  icon: LucideIcon;
  titre: string;
  accroche: string;
  points: string[];
  prix: number;
  unite: string;
  /** Précision sous le prix, quand il en faut une. */
  note?: string;
  cta: string;
  /** Visuel de la carte — absent tant que le client ne l'a pas fourni. */
  image: { label: string; src?: string };
  /** Mention manuscrite de la maquette, posée sur le visuel. */
  manuscrit: string;
};

/** Le cœur de la page : les deux formules, individuel d'abord. */
export const formules: Formule[] = [
  {
    slug: "individuel",
    icon: UserRound,
    titre: "Cours individuels",
    accroche:
      "Un accompagnement 100 % personnalisé avec un formateur expert.",
    points: [
      "Un suivi adapté à ses objectifs",
      "Un rythme sur mesure",
      "Des réponses à toutes ses questions",
      "Idéal pour les enfants comme pour les ados",
    ],
    prix: 30,
    unite: "/ heure",
    cta: "Réserver un cours individuel",
    image: {
      label: "Formateur souriant en visio, main levée pour dire bonjour",
      src: "/images/cours/formule-individuel.webp",
    },
    manuscrit: "Un accompagnement sur mesure !",
  },
  {
    slug: "groupe",
    icon: UsersRound,
    titre: "Cours en petit groupe",
    accroche: "Apprenez et progressez à plusieurs, jusqu'à 3 participants.",
    points: [
      "Une dynamique motivante",
      "Des échanges riches et interactifs",
      "Un apprentissage collaboratif",
      "Idéal entre frères et sœurs ou entre amis",
    ],
    prix: 20,
    unite: "/ heure / personne",
    note: "Groupe de 3 participants maximum",
    cta: "Réserver un cours en groupe",
    image: {
      label: "Trois enfants côte à côte devant leurs ordinateurs",
      src: "/images/cours/formule-groupe.webp",
    },
    manuscrit: "Apprendre ensemble, c'est encore plus fun !",
  },
];

/** Les packs de 10 heures, à tarif dégressif. */
export const packsHeures = {
  titre: "Des packs d'heures pour aller plus loin !",
  texte:
    "Profitez de nos tarifs préférentiels en réservant un pack de 10 heures.",
  packs: [
    {
      titre: "Pack 10 h — Cours individuels",
      prixInitial: 300,
      prix: 255,
      remise: 15,
      detail: "Soit 25,50 € / heure",
    },
    {
      titre: "Pack 10 h — Cours en groupe",
      prixInitial: 200,
      prix: 170,
      remise: 15,
      detail: "Soit 17 € / heure / personne",
    },
  ],
} as const;

/** « Comment ça fonctionne ? » — les 4 étapes, affichées en frise. */
export const etapes: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: CalendarDays,
    titre: "Réservez votre cours",
    texte:
      "Choisissez la formule, la date et l'horaire qui vous conviennent.",
  },
  {
    icon: MonitorPlay,
    titre: "Recevez le lien de connexion",
    texte: "Un lien sécurisé vous est envoyé par e-mail.",
  },
  {
    icon: GraduationCap,
    titre: "Participez au cours",
    texte: "Échangez avec votre formateur en toute simplicité.",
  },
  {
    icon: TrendingUp,
    titre: "Progressez !",
    texte: "Mettez en pratique et atteignez vos objectifs.",
  },
];

/**
 * Témoignages. Le client a confirmé qu'il s'agit de vrais retours de
 * familles : rien n'est inventé ici, conformément à la ligne tenue sur
 * /temoignages (des avis fabriqués sont une pratique commerciale trompeuse,
 * art. L121-2 du code de la consommation).
 */
export const temoignagesCours: {
  citation: string;
  nom: string;
  role: string;
  note: number;
  avatar?: string;
}[] = [
  {
    citation:
      "Mon fils de 10 ans adore ses cours en ligne ! Le formateur est patient et explique super bien.",
    nom: "Sophie M.",
    role: "Maman de Léo, 10 ans",
    note: 5,
    avatar: "/images/cours/avis-sophie.webp",
  },
  {
    citation:
      "Les cours en groupe sont parfaits pour mes deux enfants. Ils apprennent tout en s'amusant !",
    nom: "Thomas R.",
    role: "Papa de Chloé et Nathan",
    note: 5,
    avatar: "/images/cours/avis-thomas.webp",
  },
];

/**
 * Les quatre questions viennent de la maquette ; les réponses sont rédigées,
 * l'accordéon y étant fermé. À relire par le client, en particulier les
 * conditions d'annulation qui l'engagent.
 */
export const faqCours: { question: string; reponse: string }[] = [
  {
    question: "À partir de quel âge peut-on suivre un cours en ligne ?",
    reponse:
      "Dès 5 ans. Les cours suivent les mêmes tranches d'âge que nos parcours enregistrés (5–8, 8–11, 12–16 ans) et le formateur adapte le rythme à l'enfant. Pour les plus jeunes, on demande qu'un parent reste à proximité les premières séances.",
  },
  {
    question: "Quels sont les moyens de paiement ?",
    reponse:
      "Le paiement se fait en ligne au moment de la réservation, par carte bancaire. Les packs de 10 heures se règlent en une fois et restent valables sans limite de durée.",
  },
  {
    question: "Puis-je annuler ou reporter un cours ?",
    reponse:
      "Oui. Un cours peut être reporté ou annulé jusqu'à 24 heures avant l'horaire prévu, sans frais. En deçà, la séance est décomptée — sauf imprévu de santé, où l'on trouve toujours une solution.",
  },
  {
    question: "Quels outils sont nécessaires ?",
    reponse:
      "Un ordinateur ou une tablette avec caméra et micro, et une connexion internet. Rien à installer : on rejoint le cours depuis un lien reçu par e-mail. Un casque rend la séance plus confortable pour l'enfant.",
  },
];

/** Le bandeau de fin de page. */
export const ctaCours = {
  titre: "Prêt à vous lancer ?",
  texte:
    "Réservez dès maintenant votre premier cours en ligne et faites le plein d'idées, de connaissances et de créativité !",
  bouton: "Réserver mon cours",
  note: "Des créneaux disponibles toute la semaine",
  manuscrit: "Des compétences pour la vie !",
} as const;
