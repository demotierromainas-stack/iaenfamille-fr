import {
  Compass,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

/**
 * Contenu rédigé faute d'information sur le client : il décrit une posture
 * (accompagner les familles, cadre sûr, apprendre ensemble) déduite des
 * maquettes, sans inventer d'histoire personnelle, de date de création, de
 * chiffre ni de nom de fondateur. Voir docs/a-valider-client.md.
 */

export const valeurs: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: ShieldCheck,
    titre: "La sécurité d'abord",
    texte:
      "Des outils choisis un par un, des contenus filtrés, et jamais de publicité. Ce qui est créé pendant nos ateliers reste à la famille.",
  },
  {
    icon: UsersRound,
    titre: "Apprendre ensemble",
    texte:
      "Nous ne formons pas les enfants d'un côté et les parents de l'autre. Le vrai sujet, c'est ce qui se passe quand ils s'y mettent à deux.",
  },
  {
    icon: Compass,
    titre: "Comprendre avant d'utiliser",
    texte:
      "Savoir cliquer ne suffit pas. Nous prenons le temps d'expliquer comment ça marche, et surtout ce que ça vaut.",
  },
  {
    icon: HeartHandshake,
    titre: "Sans jugement",
    texte:
      "Personne n'est en retard. Beaucoup de parents découvrent tout chez nous, et c'est très bien ainsi.",
  },
];

export const approche: { etape: string; titre: string; texte: string }[] = [
  {
    etape: "01",
    titre: "On part de vos usages",
    texte:
      "Les histoires du soir, les devoirs, les coloriages du mercredi. Pas de théorie détachée du quotidien.",
  },
  {
    etape: "02",
    titre: "On fait, on ne regarde pas",
    texte:
      "Chaque module se termine par quelque chose que vous avez créé et que vous pouvez montrer ce soir-là.",
  },
  {
    etape: "03",
    titre: "On explique les limites",
    texte:
      "Ce que l'IA invente, ce qu'elle ne sait pas faire, ce qu'il ne faut pas lui confier. C'est là que se joue l'esprit critique.",
  },
  {
    etape: "04",
    titre: "On vous laisse autonomes",
    texte:
      "L'objectif n'est pas que vous reveniez, mais que vous n'ayez plus besoin de nous pour vos prochains projets.",
  },
];

export const convictions: { icon: LucideIcon; titre: string; texte: string }[] = [
  {
    icon: Lightbulb,
    titre: "Interdire ne prépare pas",
    texte:
      "Les enfants croiseront l'IA de toute façon. Mieux vaut qu'ils la découvrent accompagnés que seuls.",
  },
  {
    icon: Sparkles,
    titre: "Créer plutôt que consommer",
    texte:
      "Il y a une différence entre regarder défiler des images et fabriquer les siennes. Nous sommes du côté de la fabrication.",
  },
];
