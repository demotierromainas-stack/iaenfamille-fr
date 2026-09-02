import type { MetadataRoute } from "next";
import { site, mainNav, footerNav } from "@/lib/site";
import { destinations } from "@/data/destinations";
import { formationsParents } from "@/data/formations-parents";
import { parcoursEnfants } from "@/data/parcours-enfants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Les pages de navigation, sans doublon entre en-tête et pied de page.
  const statiques = new Set<string>([
    ...mainNav.map((n) => n.href),
    ...footerNav.flatMap((c) => c.items.map((i) => i.href)),
    "/confidentialite",
    "/cgv",
  ]);

  const pages: MetadataRoute.Sitemap = [...statiques].map((href) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));

  return [
    ...pages,
    ...destinations.map((d) => ({
      url: `${site.url}/stages-en-presentiel/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...formationsParents.map((f) => ({
      url: `${site.url}/formations/${f.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...parcoursEnfants.map((p) => ({
      url: `${site.url}/formations-enfants/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
