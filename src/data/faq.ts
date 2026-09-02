/** Questions regroupées par thème. Contenu rédigé, à faire valider. */
export const faqSections: {
  titre: string;
  questions: { question: string; reponse: string }[];
}[] = [
  {
    titre: "Les formations en ligne",
    questions: [
      {
        question: "Faut-il s'y connaître en informatique ?",
        reponse:
          "Non. Si vous savez utiliser un navigateur et écrire un message, vous avez le niveau. Les formations partent du principe que vous n'avez jamais ouvert un outil d'IA.",
      },
      {
        question: "Combien de temps ai-je accès à une formation achetée ?",
        reponse:
          "À vie, et les mises à jour sont comprises. Les outils d'IA évoluent vite : quand un module devient obsolète, il est refait et vous y avez accès sans rien repayer.",
      },
      {
        question: "Quelle différence entre une formation seule et le pack ?",
        reponse:
          "Le contenu est identique. Le pack réunit les huit formations parents à 499 € au lieu de 792 €, soit 293 € d'économie si vous comptez en suivre plus de cinq.",
      },
      {
        question: "Puis-je être remboursé si ça ne me convient pas ?",
        reponse:
          "Vous disposez de 30 jours pour changer d'avis, sans avoir à vous justifier.",
      },
    ],
  },
  {
    titre: "Les parcours enfants",
    questions: [
      {
        question: "À partir de quel âge ?",
        reponse:
          "Dès 5 ans, avec un parent à côté. Les parcours sont découpés en trois tranches — 5–8, 8–11 et 12–16 ans — parce qu'on ne parle pas d'IA de la même façon à un enfant de six ans et à un adolescent.",
      },
      {
        question: "Mon enfant est-il seul face à l'outil ?",
        reponse:
          "Non. Les ateliers sont pensés pour être faits accompagnés, et rien n'est publié en ligne. Ce que votre enfant crée reste dans la famille.",
      },
      {
        question: "Mon enfant est entre deux tranches d'âge, laquelle choisir ?",
        reponse:
          "Fiez-vous à son aisance plutôt qu'à sa date de naissance. Un enfant de 8 ans très à l'aise s'ennuiera dans le parcours 5–8. En cas de doute, écrivez-nous.",
      },
      {
        question: "Est-ce que ça ne va pas l'empêcher de réfléchir par lui-même ?",
        reponse:
          "C'est la crainte la plus fréquente, et elle est légitime. Nos ateliers ne consistent jamais à demander une réponse à l'IA : ils consistent à créer quelque chose avec elle, puis à examiner ce qu'elle a produit. L'esprit critique est le sujet, pas un effet secondaire.",
      },
    ],
  },
  {
    titre: "Les stages en présentiel",
    questions: [
      {
        question: "Faut-il venir en famille complète ?",
        reponse:
          "Au moins un parent et un enfant. Beaucoup viennent à deux, d'autres avec fratrie et grands-parents. Les ateliers s'adaptent.",
      },
      {
        question: "Que faut-il apporter ?",
        reponse:
          "Un ordinateur portable ou une tablette par famille suffit. Nous prêtons du matériel à celles qui n'en ont pas.",
      },
      {
        question: "Quand ont lieu les stages et combien coûtent-ils ?",
        reponse:
          "Les dates et tarifs de la prochaine saison sont communiqués sur demande. Écrivez-nous en précisant la destination qui vous intéresse.",
      },
    ],
  },
  {
    titre: "Sécurité et données",
    questions: [
      {
        question: "Quelles données collectez-vous ?",
        reponse:
          "Uniquement ce qui est nécessaire : votre nom et votre e-mail pour vous répondre et vous donner accès à vos formations. Rien n'est revendu ni transmis à un tiers à des fins commerciales.",
      },
      {
        question: "Les créations de mon enfant sont-elles publiées ?",
        reponse:
          "Jamais sans votre accord écrit. Par défaut, tout ce qui est créé pendant nos ateliers reste privé.",
      },
    ],
  },
];
