#!/usr/bin/env node
/**
 * Signale à IndexNow les pages ajoutées, modifiées ou supprimées par un
 * déploiement. IndexNow transmet à Bing — donc à Copilot, à la recherche de
 * ChatGPT, à DuckDuckGo — et aux autres moteurs du protocole (Google n'en
 * fait pas partie). Sans lui, il faut attendre leur prochain passage.
 *
 * Les pages à signaler se déduisent des deux sitemaps : celui qui était en
 * ligne avant l'envoi et celui du build. Une URL nouvelle, disparue ou dont
 * le lastmod a changé est signalée ; les autres non, le protocole demandant
 * de ne pas renvoyer des pages inchangées. Sans sitemap précédent, tout est
 * signalé (premier envoi).
 *
 * Usage :
 *   node scripts/indexnow.mjs <nouveau-sitemap> [ancien-sitemap] [--simulation]
 *
 *   --simulation   affiche les pages qui seraient signalées, sans rien envoyer.
 *
 * Appelé par .github/workflows/deploy-infomaniak.yml après l'envoi FTP : la
 * clé doit déjà être en ligne quand le moteur vient la vérifier. Un échec ne
 * fait pas échouer le déploiement — le site est en ligne de toute façon —,
 * il est signalé en avertissement.
 */

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

/* Clé publique par conception : le moteur la lit dans /<clé>.txt pour
   vérifier que l'envoi vient bien du propriétaire du site. */
const CLE = "9894d90d68fc9d1478b20d45b886c981";
const POINT_D_ENTREE = "https://api.indexnow.org/indexnow";

const avertir = (message) => {
  // Annotation visible dans l'onglet Actions de GitHub.
  console.log(process.env.GITHUB_ACTIONS ? `::warning::IndexNow : ${message}` : `⚠  ${message}`);
};

/** loc → lastmod (chaîne vide si absent). */
async function lireSitemap(fichier) {
  if (!fichier || !existsSync(fichier)) return null;
  const xml = await readFile(fichier, "utf8");
  const pages = new Map();
  for (const [, bloc] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = bloc.match(/<loc>\s*([^<\s]+)\s*<\/loc>/)?.[1];
    const lastmod = bloc.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/)?.[1] ?? "";
    if (loc) pages.set(loc, lastmod);
  }
  return pages;
}

async function main() {
  const args = process.argv.slice(2);
  const simulation = args.includes("--simulation");
  const [nouveauFichier, ancienFichier] = args.filter((a) => !a.startsWith("--"));
  if (!nouveauFichier) {
    console.error("Usage : node scripts/indexnow.mjs <nouveau-sitemap> [ancien-sitemap]");
    process.exit(2);
  }

  const nouveau = await lireSitemap(nouveauFichier);
  if (!nouveau?.size) {
    avertir(`sitemap introuvable ou vide (${nouveauFichier}), rien n'est signalé.`);
    return;
  }

  // Le fichier-clé doit partir avec le site, sinon le moteur refuse l'envoi.
  const fichierCle = path.join(path.dirname(nouveauFichier), `${CLE}.txt`);
  if (!existsSync(fichierCle)) {
    avertir(`fichier-clé absent du build (${fichierCle}), rien n'est signalé.`);
    return;
  }

  const ancien = await lireSitemap(ancienFichier);
  const urls = ancien
    ? [
        ...[...nouveau].filter(([loc, lastmod]) => ancien.get(loc) !== lastmod).map(([loc]) => loc),
        ...[...ancien.keys()].filter((loc) => !nouveau.has(loc)),
      ]
    : [...nouveau.keys()];

  if (urls.length === 0) {
    console.log("IndexNow : aucune page ajoutée, modifiée ou supprimée, rien à signaler.");
    return;
  }

  if (simulation) {
    console.log(`IndexNow (simulation) : ${urls.length} page(s) seraient signalée(s).`);
    for (const u of urls) console.log(`  ${u}`);
    return;
  }

  const origine = new URL([...nouveau.keys()][0]).origin;
  const reponse = await fetch(POINT_D_ENTREE, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(origine).host,
      key: CLE,
      keyLocation: `${origine}/${CLE}.txt`,
      urlList: urls,
    }),
  });

  // 200 : reçu. 202 : reçu, clé en cours de vérification (premier envoi).
  if (reponse.status === 200 || reponse.status === 202) {
    console.log(`IndexNow : ${urls.length} page(s) signalée(s) (HTTP ${reponse.status}).`);
    for (const u of urls) console.log(`  ${u}`);
    return;
  }

  const corps = (await reponse.text()).slice(0, 300);
  avertir(`envoi refusé, HTTP ${reponse.status}${corps ? ` — ${corps}` : ""}`);
}

main().catch((e) => avertir(`erreur inattendue — ${e.message}`));
