/**
 * Données structurées (JSON-LD), construites depuis les données du dépôt et
 * jamais recopiées à la main : un prix ou un titre modifié dans src/data se
 * répercute ici tout seul. Un balisage qui diverge de la page visible est
 * une raison de sanction, pas un détail.
 *
 * Ne baliser que ce qui est affiché. Pas d'AggregateRating (les avis publiés
 * sur son propre site n'y ouvrent pas droit), pas de FAQPage (réservé depuis
 * 2023 aux sites gouvernementaux et de santé), pas de sameAs tant que les
 * liens sociaux du pied de page pointent vers les accueils génériques.
 */
import type { Formation } from "@/data/formations-parents";
import { cheminPublic } from "./metadonnees";
import { site } from "./site";

const ID_ORGANISATION = `${site.url}/#organisation`;

const url = (href: string) => `${site.url}${cheminPublic(href)}`;

/** Accueil uniquement : l'organisation et le site, référencés ailleurs par @id. */
export function organisation() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ID_ORGANISATION,
        name: site.name,
        url: url("/"),
        description: site.description,
        logo: `${site.url}/images/brand/logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: url("/"),
        name: site.name,
        inLanguage: "fr-FR",
        publisher: { "@id": ID_ORGANISATION },
      },
    ],
  };
}

/** Fil d'Ariane : il suit la navigation réelle (liens « Toutes les… »). */
export function filDAriane(etapes: { nom: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: etapes.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.nom,
      item: url(e.href),
    })),
  };
}

/** 90 → « PT1H30M » : la durée ISO 8601 qu'attend courseWorkload. */
function dureeIso(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}`;
}

/**
 * Fiche formation. Le prix est celui affiché sur la fiche. Pas de
 * `availability` : tant que SKOOL_URL désigne un profil et non la
 * communauté, rien n'est réellement en vente, et annoncer « en stock »
 * serait faux.
 */
export function cours(f: Formation) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: f.titre,
    description: f.resume,
    url: url(`/formations/${f.slug}`),
    inLanguage: "fr-FR",
    educationalLevel: f.niveau,
    provider: { "@type": "Organization", "@id": ID_ORGANISATION, name: site.name, url: url("/") },
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: f.prix,
      priceCurrency: "EUR",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: dureeIso(f.minutes),
    },
  };
}

/** Page liste : renvoie à chaque fiche, qui porte son propre Course. */
export function listeDeCours(formations: Formation[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: formations.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: url(`/formations/${f.slug}`),
    })),
  };
}
