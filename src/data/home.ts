import {
  Baby,
  Brain,
  Gamepad2,
  Heart,
  Images,
  Lightbulb,
  Lock,
  Palette,
  Palmtree,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { STAGES_HREF, STAGES_LABEL } from "@/lib/site";
import type { Tone } from "@/components/PlaceholderImage";

/** Les 3 réassurances sous les CTA du hero. */
export const heroPoints: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Sécurité et bienveillance",
    text: "Un cadre sûr pour toute la famille",
  },
  {
    icon: UsersRound,
    title: "Apprendre ensemble",
    text: "Des moments qui créent du lien",
  },
  {
    icon: Lightbulb,
    title: "Créatif et utile",
    text: "Des compétences pour demain",
  },
];

/** Les 3 grandes cartes d'offre juste sous le hero. */
export const offers: {
  icon: LucideIcon;
  tone: "indigo" | "violet" | "orange";
  title: string;
  text: string;
  bullets: string[];
  cta: string;
  href: string;
  image: { label: string; tone: Tone };
  ages?: { range: string; text: string; label: string }[];
}[] = [
  {
    icon: UsersRound,
    tone: "indigo",
    title: "Formations parents",
    text: "Apprenez à utiliser l'IA pour créer des activités, gagner du temps et accompagner vos enfants.",
    bullets: [
      "Créer des activités éducatives",
      "Personnaliser l'apprentissage",
      "Gagner du temps au quotidien",
    ],
    cta: "En savoir plus",
    href: "/formations-parents",
    image: { label: "Mère utilisant un ordinateur portable", tone: "warm" },
  },
  {
    icon: Baby,
    tone: "violet",
    title: "Formations enfants",
    text: "Des parcours adaptés à chaque âge pour découvrir, comprendre et créer avec l'IA en s'amusant.",
    bullets: [],
    ages: [
      { range: "5–8 ans", text: "Découvrir et s'amuser", label: "Enfant 5–8 ans" },
      { range: "8–11 ans", text: "Comprendre et créer", label: "Enfant 8–11 ans" },
      { range: "12–16 ans", text: "Innover et construire", label: "Ado 12–16 ans" },
    ],
    cta: "Voir tous les parcours",
    href: "/formations-enfants",
    image: { label: "Enfants en atelier", tone: "kids" },
  },
  {
    icon: Palmtree,
    tone: "orange",
    title: STAGES_LABEL,
    text: "Des expériences immersives de 4 jours pour parents et enfants dans des lieux d'exception.",
    bullets: [
      "Ateliers pratiques en famille",
      "Encadrement bienveillant",
      "Séjours inoubliables",
    ],
    cta: "Découvrir les stages",
    href: STAGES_HREF,
    image: { label: "Villa avec piscine au coucher du soleil", tone: "dubai" },
  },
];

/** « Des activités pour créer, comprendre et s'amuser » — 5 cartes. */
export const activites: {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: Tone;
}[] = [
  {
    icon: Palette,
    title: "Coloriages à créer",
    text: "Générez des coloriages uniques en quelques clics.",
    tone: "kids",
  },
  {
    icon: Sparkles,
    title: "Histoires personnalisées",
    text: "Créez des histoires sur mesure avec vos personnages.",
    tone: "warm",
  },
  {
    icon: Images,
    title: "Images illustrées",
    text: "Imaginez et créez des images époustouflantes.",
    tone: "maurice",
  },
  {
    icon: Gamepad2,
    title: "Jeux créatifs",
    text: "Inventez des jeux, quiz et défis avec l'aide de l'IA.",
    tone: "brand",
  },
  {
    icon: UsersRound,
    title: "Projets en famille",
    text: "Réalisez ensemble des projets utiles et inspirants.",
    tone: "france",
  },
];

/** Bandeau sombre « Simplicité. Sécurité. Apprentissage ensemble. » */
export const engagements: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Sécurité avant tout",
    text: "Des outils sélectionnés avec soin, dans un cadre sécurisé et respectueux.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    text: "Une approche positive et adaptée à chaque âge, sans jugement.",
  },
  {
    icon: UsersRound,
    title: "Apprentissage en famille",
    text: "Des moments de qualité pour renforcer les liens et apprendre ensemble.",
  },
  {
    icon: Lock,
    title: "Données protégées",
    text: "Confidentialité et protection des données personnelles garanties.",
  },
];

export const brainIcon = Brain;
