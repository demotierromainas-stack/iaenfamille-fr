import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { site, mainNav, footerNav } from "@/lib/site";
import { cheminPublic } from "@/lib/metadonnees";
import { formationsParents } from "@/data/formations-parents";
import { parcoursEnfants } from "@/data/parcours-enfants";

export const dynamic = "force-static";

/*
 * lastModified est la date du dernier commit ayant touché le contenu de la
 * page — pas la date du build. Une date qui change à chaque déploiement
 * annonce tout le site comme modifié, et Google cesse de s'y fier.
 *
 * Ni priority ni changeFrequency : Google les ignore.
 */

/** Où vit le contenu d'une page, quand ce n'est pas seulement son dossier. */
const SOURCES: Record<string, string[]> = {
  "/": ["src/app/page.tsx", "src/components/home", "src/data/home.ts"],
  "/formations-parents": ["src/app/formations-parents", "src/components/parents", "src/data/formations-parents.ts"],
  "/formations-enfants": ["src/app/formations-enfants/page.tsx", "src/components/enfants", "src/data/parcours-enfants.ts"],
  "/contact": ["src/app/contact", "src/components/contact"],
  "/a-propos": ["src/app/a-propos", "src/data/a-propos.ts"],
  "/faq": ["src/app/faq", "src/data/faq.ts"],
  "/guide-des-parents": ["src/app/guide-des-parents", "src/data/guide.ts"],
};

function git(...args: string[]) {
  // --literal-pathspecs : sans lui, « [slug] » serait lu comme un motif.
  return execFileSync("git", ["--literal-pathspecs", ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

/* Un clone superficiel attribue tous les fichiers à l'unique commit présent :
   la même date partout, donc fausse. Mieux vaut alors ne rien déclarer. */
const historiqueComplet = (() => {
  try {
    return git("rev-parse", "--is-shallow-repository") === "false";
  } catch {
    return false;
  }
})();

function modifieLe(sources: string[]) {
  if (!historiqueComplet) return undefined;
  try {
    return git("log", "-1", "--format=%cI", "--", ...sources) || undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Les pages de navigation, sans doublon entre en-tête et pied de page.
  const statiques = new Set<string>([
    ...mainNav.map((n) => n.href),
    ...footerNav.flatMap((c) => c.items.map((i) => i.href)),
    "/confidentialite",
    "/cgv",
  ]);

  // Les URL finissent par « / » comme les pages exportées (trailingSlash) :
  // sinon chaque entrée du sitemap passerait par une redirection.
  const entree = (href: string, sources: string[]) => ({
    url: `${site.url}${cheminPublic(href)}`,
    lastModified: modifieLe(sources),
  });

  return [
    ...[...statiques].map((href) => entree(href, SOURCES[href] ?? [`src/app${href}`])),
    ...formationsParents.map((f) =>
      entree(`/formations/${f.slug}`, ["src/app/formations/[slug]", "src/data/formations-parents.ts"]),
    ),
    ...parcoursEnfants.map((p) =>
      entree(`/formations-enfants/${p.slug}`, ["src/app/formations-enfants/[tranche]", "src/data/parcours-enfants.ts"]),
    ),
  ];
}
