/**
 * Contenu éditorial rédigé pour le site. Ce sont des conseils généraux sur
 * l'IA et les enfants, pas des faits vérifiables sur le client — mais ils
 * engagent son discours : à faire relire.
 */
export const chapitres: {
  numero: string;
  titre: string;
  texte: string;
  points: string[];
}[] = [
  {
    numero: "01",
    titre: "Commencer par regarder ensemble",
    texte:
      "La première fois, ne laissez pas votre enfant découvrir seul. Installez-vous à côté de lui et posez une question à voix haute, ensemble. Ce moment fonde tout le reste : il apprend que l'IA est un outil qu'on utilise, pas un oracle qu'on interroge en cachette.",
    points: [
      "Une première session à deux, sans objectif de performance",
      "Dire à voix haute ce qu'on demande et pourquoi",
      "Regarder la réponse ensemble avant de l'utiliser",
    ],
  },
  {
    numero: "02",
    titre: "Montrer qu'elle se trompe",
    texte:
      "C'est le point le plus important, et le plus vite oublié. Une IA formule ses erreurs avec le même aplomb que ses réponses justes. Posez-lui volontairement une question dont vous connaissez la réponse, sur votre ville ou votre famille, et montrez l'erreur à votre enfant. Cette démonstration vaut tous les discours.",
    points: [
      "Poser une question dont vous connaissez la réponse",
      "Faire constater l'erreur plutôt que la raconter",
      "Prendre l'habitude de vérifier ce qui compte",
    ],
  },
  {
    numero: "03",
    titre: "Créer plutôt que demander",
    texte:
      "Il y a une différence de nature entre « fais mon exposé » et « aide-moi à illustrer mon exposé ». Dans le premier cas l'enfant délègue, dans le second il reste aux commandes. Orientez systématiquement vers des usages où il produit quelque chose dont il est l'auteur.",
    points: [
      "Privilégier les projets où l'enfant décide",
      "Utiliser l'IA pour illustrer, pas pour remplacer",
      "Garder une trace de ce qu'il a fait lui-même",
    ],
  },
  {
    numero: "04",
    titre: "Poser un cadre simple",
    texte:
      "Pas besoin d'un règlement de dix points. Trois règles claires, formulées avec l'enfant, tiennent mieux dans le temps qu'une liste d'interdits imposée. Et une règle qu'on peut expliquer est une règle qu'on peut discuter.",
    points: [
      "On n'écrit jamais son nom, son adresse ou son école",
      "On demande avant de publier ou partager une création",
      "On vient voir un adulte si quelque chose met mal à l'aise",
    ],
  },
  {
    numero: "05",
    titre: "Accepter de ne pas tout savoir",
    texte:
      "Vos enfants iront vite, souvent plus vite que vous. Ce n'est pas un problème : votre rôle n'est pas d'être le meilleur utilisateur, mais celui qui pose les questions de sens. Pourquoi tu l'as demandé ? Est-ce que c'est vrai ? Qu'est-ce que tu en fais ?",
    points: [
      "Dire « je ne sais pas, cherchons » plutôt que bluffer",
      "Se faire expliquer par son enfant ce qu'il a découvert",
      "Garder la main sur le sens, pas sur la technique",
    ],
  },
];

export const reperesAge: { tranche: string; texte: string }[] = [
  {
    tranche: "5–8 ans",
    texte:
      "Toujours accompagné. L'IA sert à fabriquer : une image, une histoire, un coloriage. On ne cherche pas d'information, on crée.",
  },
  {
    tranche: "8–11 ans",
    texte:
      "Autonomie surveillée. L'enfant formule ses propres demandes, mais on regarde ensemble les résultats. C'est l'âge où l'on installe la vérification.",
  },
  {
    tranche: "12–16 ans",
    texte:
      "Autonomie réelle, cadre explicite. Les questions deviennent celles de l'école, des sources, du droit d'auteur et de ce qu'on partage de soi.",
  },
];
