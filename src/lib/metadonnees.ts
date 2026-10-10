import type { Metadata } from "next";
import { site } from "./site";
import { referencementPages, type CheminPage, type Referencement } from "@/data/referencement";

/** Patron des titres de page, partagé par le layout et la fabrique. */
export const MODELE_TITRE = `%s | ${site.name}`;

/**
 * Image de partage (WhatsApp, LinkedIn, iMessage…), 1200 × 630.
 * Les réseaux la gardent longtemps en cache : toute nouvelle version prend un
 * nouveau nom de fichier (-v2, -v3…), comme les autres visuels du site.
 */
export const IMAGE_PARTAGE = {
  url: "/images/brand/partage-v1.jpg",
  width: 1200,
  height: 630,
  alt: "IA en famille — des formations pour les parents et des parcours pour les enfants de 5 à 16 ans",
};

/**
 * Chemin public d'une page. Le site est exporté avec `trailingSlash: true`
 * (next.config.ts) : sans la barre finale, un canonical ou une entrée de
 * sitemap désignerait une URL qui redirige.
 */
export function cheminPublic(href: string) {
  return href === "/" ? "/" : `${href.replace(/\/+$/, "")}/`;
}

/**
 * Métadonnées complètes d'une page : titre, description, canonical, aperçus
 * de partage, et noindex si la page ne doit pas apparaître dans Google.
 * Titres, descriptions et choix d'indexation se décident dans
 * src/data/referencement.ts.
 *
 * Toutes les pages passent par ici parce que Next fusionne les `metadata`
 * de façon superficielle : une page sans `openGraph` hérite tel quel de celui
 * du layout — titre et URL de l'accueil compris —, et une page qui en déclare
 * un morceau efface le reste, image comprise. Reconstruire l'objet entier à
 * chaque page rend ces deux pannes impossibles.
 */
export function metadonnees({
  titre,
  description,
  indexer,
  titreAbsolu = false,
  chemin,
}: Referencement & {
  /** Chemin de la page, avec ou sans barre finale. */
  chemin: string;
}): Metadata {
  const url = cheminPublic(chemin);
  const titreComplet = titreAbsolu ? titre : MODELE_TITRE.replace("%s", titre);

  return {
    title: titreAbsolu ? { absolute: titre } : titre,
    description,
    // « follow » : la page sort des résultats, mais Google suit toujours ses
    // liens vers le reste du site. Une page indexable n'écrit rien et garde
    // le verrou d'aperçu du layout (noindex hors production).
    ...(indexer ? {} : { robots: { index: false, follow: true } }),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      title: titreComplet,
      description,
      url,
      images: [IMAGE_PARTAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: titreComplet,
      description,
      images: [IMAGE_PARTAGE.url],
    },
  };
}

/** Métadonnées d'une page fixe, telles que décidées dans referencement.ts. */
export function metadonneesDe(chemin: CheminPage): Metadata {
  return metadonnees({ ...referencementPages[chemin], chemin });
}
