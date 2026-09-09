import {
  CalendarCheck,
  Eye,
  Hand,
  Headphones,
  Laptop,
  Radio,
  Repeat,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Video,
  Wifi,
  type LucideIcon,
} from "lucide-react";

/**
 * Cours en visio, avec un animateur, pour les enfants — l'offre demandée
 * par le client en complément des parcours enregistrés.
 *
 * Aucune maquette pour cette page, et aucun élément commercial fourni :
 * comme pour les stages, ni tarif ni calendrier n'est affiché tant que le
 * client ne les a pas communiqués. Le reste est une proposition rédigée,
 * recensée dans docs/a-valider-client.md.
 */

export type FormatCours = {
  slug: "groupe" | "particulier";
  icon: LucideIcon;
  badge: string;
  titre: string;
  accroche: string;
  /** Chiffres clés affichés en tête de carte. */
  reperes: { label: string; valeur: string }[];
  points: string[];
  pourQui: string;
  cta: string;
};

/** Le cœur de la page : les deux façons de suivre un cours en ligne. */
export const formatsCours: FormatCours[] = [
  {
    slug: "groupe",
    icon: UsersRound,
    badge: "Le plus demandé",
    titre: "En petit groupe",
    accroche:
      "Quelques enfants du même âge, un rendez-vous chaque semaine, et des projets qu'on montre aux autres à la fin de la séance.",
    reperes: [
      { label: "Groupe", valeur: "4 à 6 enfants" },
      { label: "Rythme", valeur: "1 séance par semaine" },
      { label: "Durée", valeur: "2 heures" },
    ],
    points: [
      "Des enfants de la même tranche d'âge, jamais tout seuls face à l'écran",
      "Un animateur qui voit ce que chacun fait et débloque sur le moment",
      "L'émulation du groupe : on s'inspire de ce que font les autres",
      "Un moment de restitution à chaque fin de séance",
    ],
    pourQui:
      "Les enfants qui aiment apprendre à plusieurs et qui ont besoin d'un rendez-vous régulier pour s'y tenir.",
    cta: "Demander les créneaux",
  },
  {
    slug: "particulier",
    icon: UserRound,
    badge: "Sur mesure",
    titre: "En cours particulier",
    accroche:
      "Un enfant, un animateur. On part de ce qui l'intéresse, on avance à son rythme, et on cale les séances quand ça vous arrange.",
    reperes: [
      { label: "Groupe", valeur: "1 enfant" },
      { label: "Rythme", valeur: "à la carte" },
      { label: "Durée", valeur: "2 heures" },
    ],
    points: [
      "Le programme suit ses envies : dessin, histoires, jeux, projet d'école",
      "Toute l'attention de l'animateur, du début à la fin de la séance",
      "Des horaires choisis avec vous, y compris le week-end",
      "Idéal pour reprendre un point vu en groupe, ou pour aller plus loin",
    ],
    pourQui:
      "Les enfants très curieux qui veulent aller vite, les plus réservés, et ceux dont l'emploi du temps ne rentre pas dans un créneau fixe.",
    cta: "Demander un créneau",
  },
];

/** Ce qu'un animateur en visio apporte, que l'enregistré ne peut pas. */
export const pourquoiAnimateur: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: Hand,
    titre: "Il peut lever la main",
    texte:
      "La question qui bloque trouve sa réponse tout de suite, pas trois jours plus tard.",
  },
  {
    icon: Eye,
    titre: "L'animateur voit son écran",
    texte:
      "Quand ça coince, on regarde ensemble et on corrige à deux. Rien ne reste flou.",
  },
  {
    icon: CalendarCheck,
    titre: "Un vrai rendez-vous",
    texte:
      "Un créneau dans la semaine, c'est ce qui fait qu'un enfant s'y met — et qu'il continue.",
  },
  {
    icon: Sparkles,
    titre: "Il repart avec sa création",
    texte:
      "Chaque séance se termine sur quelque chose de fini, qu'il peut montrer à la maison.",
  },
];

/** Déroulé d'une séance de 2 heures, affiché en frise. */
export const derouleSeance: { repere: string; titre: string; texte: string }[] = [
  {
    repere: "10 min",
    titre: "On se retrouve",
    texte:
      "Tout le monde se connecte, on se dit bonjour et on annonce ce qu'on va créer aujourd'hui.",
  },
  {
    repere: "20 min",
    titre: "On découvre",
    texte:
      "L'animateur montre l'outil du jour et fait un premier essai en partageant son écran.",
  },
  {
    repere: "1 h 10",
    titre: "On crée",
    texte:
      "Chaque enfant se lance sur son propre projet. L'animateur passe d'un écran à l'autre, avec une pause au milieu pour souffler.",
  },
  {
    repere: "20 min",
    titre: "On se montre tout",
    texte:
      "Chacun présente ce qu'il a fait. C'est le moment que les enfants préfèrent.",
  },
];

/**
 * Ce que la séance apporte selon l'âge. Les tranches et les liens reprennent
 * `parcoursEnfants` : mêmes repères que le reste du site, pas de doublon.
 */
export const parAge: { slug: string; titre: string; texte: string }[] = [
  {
    slug: "5-8-ans",
    titre: "On manipule, on rigole",
    texte:
      "Séances très guidées, beaucoup d'images et de sons. Un parent reste à côté pour les premières fois.",
  },
  {
    slug: "8-11-ans",
    titre: "On comprend ce qu'on fait",
    texte:
      "L'enfant formule ses propres demandes à l'IA et commence à juger le résultat par lui-même.",
  },
  {
    slug: "12-16-ans",
    titre: "On construit un projet",
    texte:
      "Des séances plus ambitieuses : un projet mené sur plusieurs semaines, et l'esprit critique qui va avec.",
  },
];

/** Le cadre posé autour des séances — la même exigence que partout ailleurs. */
export const cadreCours: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: ShieldCheck,
    titre: "Un animateur formé",
    texte: "Toujours le même pour un groupe, afin que les enfants le connaissent.",
  },
  {
    icon: Video,
    titre: "Une salle privée",
    texte: "Un lien personnel par famille, personne d'autre ne peut y entrer.",
  },
  {
    icon: Eye,
    titre: "Les parents bienvenus",
    texte: "Vous pouvez assister à une séance quand vous le souhaitez.",
  },
  {
    icon: Radio,
    titre: "Rien n'est publié",
    texte: "Les créations restent entre l'enfant, sa famille et son groupe.",
  },
];

/** Ce qu'il faut prévoir à la maison. */
export const materiel: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: Laptop,
    titre: "Un ordinateur ou une tablette",
    texte: "Avec une caméra et un micro. Un écran un peu grand aide à créer.",
  },
  {
    icon: Wifi,
    titre: "Une connexion internet",
    texte: "Rien à installer : on rejoint la séance depuis un lien reçu par e-mail.",
  },
  {
    icon: Headphones,
    titre: "Un casque",
    texte: "Confortable pour l'enfant, et plus calme pour le reste de la maison.",
  },
  {
    icon: Repeat,
    titre: "De quoi refaire",
    texte: "Un résumé de la séance est envoyé après, pour rejouer l'atelier en famille.",
  },
];

export const faqCours: { question: string; reponse: string }[] = [
  {
    question: "À partir de quel âge un enfant peut-il suivre un cours en ligne ?",
    reponse:
      "Dès 5 ans, avec les mêmes tranches d'âge que nos parcours en ligne (5–8, 8–11, 12–16 ans). Pour les plus jeunes, on demande qu'un parent reste à proximité les premières séances, le temps que l'enfant prenne ses repères.",
  },
  {
    question: "Faut-il déjà savoir se servir d'un ordinateur ?",
    reponse:
      "Non. La première séance sert justement à prendre l'outil en main. Un ordinateur ou une tablette avec caméra et micro suffit, et il n'y a aucun logiciel à installer : on rejoint la séance depuis un lien envoyé par e-mail.",
  },
  {
    question: "Mon enfant peut-il essayer avant de s'engager ?",
    reponse:
      "Oui. Écrivez-nous en précisant son âge et ce qui l'intéresse : nous vous proposons une première séance pour voir si le format lui convient, en groupe ou en individuel.",
  },
  {
    question: "Que se passe-t-il si on rate une séance ?",
    reponse:
      "Prévenez-nous et nous rattrapons : soit sur un autre créneau du même niveau, soit avec un résumé de ce qui a été fait pour que l'enfant reprenne sans décrocher.",
  },
  {
    question: "Quels sont les tarifs et les horaires ?",
    reponse:
      "Les créneaux de la saison et les tarifs sont communiqués sur demande, pour le groupe comme pour le cours particulier. Dites-nous l'âge de votre enfant et vos disponibilités : nous revenons vers vous avec ce qui colle.",
  },
];
