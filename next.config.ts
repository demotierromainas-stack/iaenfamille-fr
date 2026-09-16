import type { NextConfig } from "next";

/**
 * Export statique : l'hébergement Infomaniak n'exécute pas Node.js, `next build`
 * produit donc un dossier `out/` de fichiers HTML/CSS/JS à déposer tel quel.
 * Voir deploy/README.md.
 */
const nextConfig: NextConfig = {
  output: "export",
  // /cours-en-ligne → cours-en-ligne/index.html : Apache sert ces dossiers
  // nativement, sans règle de réécriture.
  trailingSlash: true,
  // Pas de serveur pour redimensionner les images à la volée : elles sont
  // servies telles quelles (déjà en WebP, 2,5 Mo au total).
  images: { unoptimized: true },
};

export default nextConfig;
