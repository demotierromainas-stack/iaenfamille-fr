/**
 * Ce que Google voit de chaque page : titre, description, et si la page doit
 * apparaître dans ses résultats. C'est le seul fichier à modifier pour ça.
 *
 * - `titre` : la ligne cliquable du résultat. « | IA en famille » est ajouté
 *   automatiquement (sauf `titreAbsolu`). Repère : 65 caractères au total,
 *   Google coupe au-delà.
 * - `description` : le texte sous le titre. Repère : 70 à 160 caractères.
 *   Google la réécrit parfois avec un extrait de la page : on propose, il
 *   dispose.
 * - `indexer` : `false` retire la page des résultats de Google sans la
 *   retirer du site. La page reçoit une balise noindex, sort du sitemap, et
 *   le prochain déploiement la signale à IndexNow. Google la retire à son
 *   prochain passage (quelques jours) ; pour accélérer, Search Console →
 *   Inspection de l'URL → Demander une indexation.
 *
 * Ne jamais bloquer une page dans robots.txt pour la désindexer : Google ne
 * pourrait plus lire son noindex, et l'URL resterait affichée sans
 * description.
 *
 * Le contrôle SEO du déploiement vérifie que tout est cohérent (une page non
 * indexée absente du sitemap, une page indexée présente, titres uniques…).
 */
import type { Formation } from "./formations-parents";
import type { Parcours } from "./parcours-enfants";
import { site } from "@/lib/site";

export type Referencement = {
  titre: string;
  description: string;
  indexer: boolean;
  /** Titre affiché tel quel, sans « | IA en famille ». */
  titreAbsolu?: boolean;
};

/** Pages fixes du site, par chemin. */
export const referencementPages = {
  "/": {
    titre: `${site.name} — Formations à l'IA pour parents et enfants`,
    titreAbsolu: true,
    description: site.description,
    indexer: true,
  },
  "/formations-parents": {
    titre: "Formations parents",
    description:
      "Des formations pratiques pour utiliser l'IA au quotidien, créer des activités et accompagner vos enfants avec confiance et sérénité.",
    indexer: true,
  },
  "/formations-enfants": {
    titre: "Formations enfants",
    description:
      "Vos enfants découvrent, comprennent et créent avec l'IA en toute sécurité, avec des parcours adaptés à chaque âge.",
    indexer: true,
  },
  "/guide-des-parents": {
    titre: "Guide des parents",
    description:
      "Cinq repères simples pour accompagner votre enfant dans sa découverte de l'intelligence artificielle.",
    indexer: true,
  },
  "/faq": {
    titre: "Questions fréquentes",
    description:
      "Âge minimum, prérequis, accès aux formations, protection des données : les réponses aux questions que se posent les parents.",
    indexer: true,
  },
  "/a-propos": {
    titre: "À propos : notre mission",
    description:
      "Notre mission : rendre l'intelligence artificielle accessible, utile et sereine pour toutes les familles.",
    indexer: true,
  },
  "/contact": {
    titre: "Nous contacter",
    description:
      "Une question sur nos formations parents ou nos parcours enfants ? Écrivez-nous, nous répondons sous 48 heures ouvrées.",
    indexer: true,
  },
  "/blog": {
    titre: "Blog : l'IA à hauteur de famille",
    description: "Conseils, retours d'expérience et actualités de l'IA à hauteur de famille.",
    indexer: true,
  },
  "/temoignages": {
    titre: "Témoignages",
    description: "Ce que les familles retiennent de nos formations parents et de nos parcours enfants.",
    indexer: true,
  },
  "/cgv": {
    titre: "Conditions générales de vente",
    description:
      "Prix et paiement, accès aux formations, droit de rétractation, réclamations : les conditions applicables à l'achat de nos formations en ligne.",
    indexer: true,
  },
  "/confidentialite": {
    titre: "Politique de confidentialité",
    description:
      "Quelles données nous collectons, pourquoi, combien de temps, et comment exercer vos droits.",
    indexer: true,
  },
  // Sortait en premier sur « IA en famille », avant l'accueil.
  "/mentions-legales": {
    titre: "Mentions légales",
    description:
      "Éditeur, directeur de la publication, hébergeur, propriété intellectuelle et données personnelles : les informations légales du site.",
    indexer: false,
  },
} satisfies Record<string, Referencement>;

export type CheminPage = keyof typeof referencementPages;

/**
 * Fiches formation (/formations/…). Le titre et le résumé se modifient dans
 * src/data/formations-parents.ts, puisqu'ils sont aussi affichés sur le site ;
 * la phrase ajoutée à la description se modifie ici.
 */
export function referencementFormation(f: Formation): Referencement {
  return {
    titre: f.titre,
    description: `${f.resume} Formation vidéo de ${f.duree}, niveau ${f.niveau.toLowerCase()}.`,
    indexer: true,
  };
}

/**
 * Parcours par tranche d'âge (/formations-enfants/…). L'accroche et les
 * titres d'ateliers viennent de src/data/parcours-enfants.ts.
 */
export function referencementParcours(p: Parcours): Referencement {
  return {
    titre: `Ateliers d'IA pour les ${p.tranche}`,
    description: `${p.accroche} : ${p.ateliers.length} ateliers d'IA pour les ${p.tranche} — ${p.ateliers.map((a) => a.titre).join(", ")}.`,
    indexer: true,
  };
}
