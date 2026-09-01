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
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
