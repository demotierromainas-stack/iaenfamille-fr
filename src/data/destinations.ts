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
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
