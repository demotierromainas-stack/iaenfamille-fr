/**
 * Rotation de teintes pour les séries de cartes et d'icônes.
 *
 * Les pages parents, contact et formation ne portaient que de l'indigo, là où
 * le reste du site alterne violet, cyan et rose : le client les trouvait
 * ternes. `accentAt` boucle sur la palette, pour qu'une liste de longueur
 * quelconque reste colorée sans énumérer les teintes à la main.
 *
 * Les teintes ne servent qu'au décor — pastilles à icône blanche, filets,
 * bordures, fonds très clairs. Le texte reste en `ink`, `muted`, indigo ou
 * violet : le cyan, le rose et l'orange n'ont pas le contraste nécessaire sur
 * blanc.
 *
 * Les classes sont écrites en clair : Tailwind ne génère que ce qu'il lit
 * littéralement dans les sources, jamais une classe composée à l'exécution.
 */

/** Sous-ensemble des teintes d'<IconBadge>, réutilisables comme `tone`. */
export type Accent = "violet" | "indigo" | "cyan" | "pink" | "orange";

/** Le violet ouvre la rotation : c'est la couleur que le client veut voir. */
const rotation: Accent[] = ["violet", "indigo", "cyan", "pink", "orange"];

/** Teinte du i-ᵉ élément d'une série, en boucle sur la palette. */
export function accentAt(i: number): Accent {
  return rotation[i % rotation.length];
}

export const accentClasses: Record<
  Accent,
  {
    /** Dégradé du filet posé sur l'arête haute d'une carte. */
    filet: string;
    /** Fond très clair, pour un encart ou une puce. */
    douce: string;
    /** Bordure de carte au survol. */
    bordure: string;
  }
> = {
  violet: {
    filet: "bg-gradient-to-r from-brand-violet to-brand-purple",
    douce: "bg-brand-violet/10",
    bordure: "hover:border-brand-violet/45",
  },
  indigo: {
    filet: "bg-gradient-to-r from-brand-blue to-brand-indigo",
    douce: "bg-brand-indigo/10",
    bordure: "hover:border-brand-indigo/45",
  },
  cyan: {
    filet: "bg-gradient-to-r from-brand-cyan to-brand-blue",
    douce: "bg-brand-cyan/10",
    bordure: "hover:border-brand-cyan/45",
  },
  pink: {
    filet: "bg-gradient-to-r from-brand-pink to-brand-purple",
    douce: "bg-brand-pink/10",
    bordure: "hover:border-brand-pink/45",
  },
  orange: {
    filet: "bg-gradient-to-r from-brand-orange to-brand-pink",
    douce: "bg-brand-orange/10",
    bordure: "hover:border-brand-orange/45",
  },
};
