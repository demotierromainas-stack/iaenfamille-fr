import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * L'aperçu client est publiquement accessible : on interdit l'indexation
 * tant que le site n'est pas en production sur son vrai domaine. Sinon les
 * moteurs référenceraient une adresse provisoire, avec des contenus encore
 * à valider et des visuels de remplacement.
 */
// robots.txt est figé au build : sans cela, la lecture de la variable
// d'environnement rend la route dynamique et bloque l'export statique.
export const dynamic = "force-static";

export const indexingAllowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export default function robots(): MetadataRoute.Robots {
  if (!indexingAllowed) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
