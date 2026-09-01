import type { Tone } from "@/components/PlaceholderImage";

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  /** Accroche courte affichée sur la carte de la home. */
  teaser: string;
  tone: Tone;
  heroLabel: string;
  /** Visuel découpé dans la maquette, à remplacer par la photo HD. */
  image: string;
  /** Chapô de la page destination. */
  intro: string;
  /** Ce qui distingue le lieu — trois arguments. */
  atouts: { titre: string; texte: string }[];
  hebergement: { titre: string; texte: string; imageLabel: string };
  /** Le fil des quatre jours. */
  programme: { jour: string; titre: string; texte: string }[];
  /** Visuels de galerie encore à fournir par le client. */
  galerie: string[];
  pratique: { saison: string; duree: string; groupe: string; acces: string };
};

export const destinations: Destination[] = [
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    tagline: "Charme, nature et art de vivre.",
    teaser:
      "Une bastide en Provence, entre lavandes et oliviers, pour une semaine de création en famille.",
    tone: "france",
    heroLabel: "Bastide provençale et champs de lavande",
    image: "/images/home/dest-france.webp",
    intro:
      "Une bastide en pierre au milieu des lavandes, à une heure de la mer. Le format le plus simple à organiser : on y vient en voiture ou en train, et le dépaysement commence quand même au portail.",
    atouts: [
      {
        titre: "Facile d'accès",
        texte:
          "À portée de train ou de voiture depuis la plupart des grandes villes : pas de vol, pas de décalage horaire.",
      },
      {
        titre: "Le calme absolu",
        texte:
          "Une propriété isolée, sans voisinage ni circulation. Les enfants circulent librement entre les ateliers.",
      },
      {
        titre: "Le terroir à table",
        texte:
          "Les repas sont préparés sur place avec les producteurs du coin. Les enfants participent quand ils veulent.",
      },
    ],
    hebergement: {
      titre: "Une bastide pour huit familles",
      texte:
        "Chambres familiales avec salle d'eau privative, grande table commune sous la treille, piscine et prairie. Les ateliers se tiennent dans l'ancienne grange réaménagée.",
      imageLabel: "Chambre familiale dans une bastide provençale",
    },
    programme: [
      {
        jour: "Jour 1",
        titre: "Arrivée et premiers pas",
        texte:
          "Installation en fin de matinée, déjeuner sous la treille, puis premier atelier de découverte tous ensemble.",
      },
      {
        jour: "Jour 2",
        titre: "Créer des images",
        texte:
          "La journée tourne autour de l'image : chaque famille construit son univers visuel et l'illustre.",
      },
      {
        jour: "Jour 3",
        titre: "Raconter une histoire",
        texte:
          "Écriture le matin, mise en images l'après-midi. Marché du village pour ceux qui préfèrent souffler.",
      },
      {
        jour: "Jour 4",
        titre: "Restitution et départ",
        texte:
          "Chaque famille présente son projet terminé, puis déjeuner de clôture avant les départs.",
      },
    ],
    galerie: [
      "La bastide vue depuis le jardin",
      "L'atelier installé dans la grange",
      "Le repas du soir sous la treille",
    ],
    pratique: {
      saison: "Printemps et été",
      duree: "4 jours / 3 nuits",
      groupe: "8 familles maximum",
      acces: "Gare TGV à 40 min, aéroport à 1 h",
    },
  },
  {
    slug: "ile-maurice",
    name: "Île Maurice",
    flag: "🇲🇺",
    tagline: "Lagons turquoise et douceur de vivre.",
    teaser:
      "Une villa les pieds dans l'eau, entre ateliers créatifs le matin et lagon l'après-midi.",
    tone: "maurice",
    heroLabel: "Plage de sable blanc et lagon turquoise",
    image: "/images/home/dest-ile-maurice.webp",
    intro:
      "Une villa ouverte sur le lagon, où l'atelier du matin se termine les pieds dans le sable. Le format le plus dépaysant, et celui où les familles restent souvent quelques jours de plus.",
    atouts: [
      {
        titre: "Le lagon à dix mètres",
        texte:
          "La plage prolonge le jardin. L'après-midi libre se passe dans l'eau, sans transport ni organisation.",
      },
      {
        titre: "Une saison douce",
        texte:
          "Un climat clément une grande partie de l'année, y compris pendant les vacances scolaires françaises.",
      },
      {
        titre: "Francophone",
        texte:
          "Tout se passe en français sur place, ce qui rend le séjour simple même pour les plus jeunes.",
      },
    ],
    hebergement: {
      titre: "Une villa de plain-pied sur la plage",
      texte:
        "Chambres familiales climatisées, terrasse commune couverte pour les ateliers, piscine et accès direct au lagon. Cuisine créole préparée sur place.",
      imageLabel: "Villa mauricienne avec terrasse ouverte sur le lagon",
    },
    programme: [
      {
        jour: "Jour 1",
        titre: "Arrivée et acclimatation",
        texte:
          "Accueil à la villa, après-midi libre pour récupérer du voyage, atelier de découverte en fin de journée.",
      },
      {
        jour: "Jour 2",
        titre: "Images et paysages",
        texte:
          "Le lagon sert de terrain de jeu : on photographie, puis on recrée et transforme avec l'IA.",
      },
      {
        jour: "Jour 3",
        titre: "Raconter son voyage",
        texte:
          "Chaque famille construit le récit illustré de son séjour. Sortie en bateau optionnelle l'après-midi.",
      },
      {
        jour: "Jour 4",
        titre: "Restitution et départ",
        texte:
          "Présentation des projets au petit matin, puis dernière baignade avant les transferts.",
      },
    ],
    galerie: [
      "La villa vue depuis la plage",
      "Atelier sur la terrasse couverte",
      "Le lagon en fin de journée",
    ],
    pratique: {
      saison: "Toute l'année",
      duree: "4 jours / 3 nuits",
      groupe: "6 familles maximum",
      acces: "Aéroport de Plaisance à 45 min",
    },
  },
  {
    slug: "dubai",
    name: "Dubaï",
    flag: "🇦🇪",
    tagline: "Modernité, innovation et évasion.",
    teaser:
      "Au cœur d'une ville laboratoire du futur, à la rencontre de l'innovation et de la robotique.",
    tone: "dubai",
    heroLabel: "Skyline de Dubaï au crépuscule",
    image: "/images/home/dest-dubai.webp",
    intro:
      "La seule destination où la ville fait partie du programme. Entre deux ateliers, on va voir de près ce dont on parle : robotique, musées du futur, architecture.",
    atouts: [
      {
        titre: "La ville comme atelier",
        texte:
          "Les visites nourrissent directement les ateliers : ce qu'on voit le matin, on le recrée l'après-midi.",
      },
      {
        titre: "Un vol court",
        texte:
          "Environ sept heures depuis Paris, sans décalage horaire majeur : le séjour commence dès le premier jour.",
      },
      {
        titre: "Pensé pour les familles",
        texte:
          "Une ville organisée pour les enfants, où tout est climatisé, accessible et à distance raisonnable.",
      },
    ],
    hebergement: {
      titre: "Un appartement familial avec salle d'atelier",
      texte:
        "Résidence avec appartements familiaux, piscine et salle privatisée pour les ateliers. Petits-déjeuners et dîners sur place, déjeuners au fil des visites.",
      imageLabel: "Résidence familiale à Dubaï avec vue sur la skyline",
    },
    programme: [
      {
        jour: "Jour 1",
        titre: "Arrivée et premier atelier",
        texte:
          "Installation, tour d'horizon du séjour et atelier de découverte en fin d'après-midi.",
      },
      {
        jour: "Jour 2",
        titre: "Le musée du futur",
        texte:
          "Visite le matin, atelier l'après-midi : chaque famille imagine son propre objet du futur.",
      },
      {
        jour: "Jour 3",
        titre: "Robotique et création",
        texte:
          "Rencontre autour de la robotique, puis création d'images et de vidéos inspirées de la journée.",
      },
      {
        jour: "Jour 4",
        titre: "Restitution et départ",
        texte:
          "Présentation des projets, déjeuner de clôture et transferts vers l'aéroport.",
      },
    ],
    galerie: [
      "La skyline depuis la résidence",
      "Atelier dans la salle privatisée",
      "Visite du musée du futur",
    ],
    pratique: {
      saison: "Automne à printemps",
      duree: "4 jours / 3 nuits",
      groupe: "6 familles maximum",
      acces: "Aéroport international à 30 min",
    },
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
