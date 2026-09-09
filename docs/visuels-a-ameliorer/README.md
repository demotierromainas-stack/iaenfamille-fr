# Visuels à remplacer

Les sept fichiers de ce dossier ont été **découpés dans les maquettes JPEG**
du client. Ils dépannent, mais ils sont trop petits : chacun est affiché plus
grand que sa taille réelle, et sur un écran Retina il faut le double encore.

Ce dossier ne sert qu'à la commande : les fichiers réellement servis par le
site vivent dans `public/images/`. Déposer les nouveaux ici, je m'occupe de
l'intégration.

## Ce qu'il faut fournir

| # | Fichier | Actuel | Cible (Retina) | Ratio à tenir | Où il s'affiche |
|---|---|---|---|---|---|
| 01 | `01-home-carte-cours-en-ligne` | 99×150 | **440×660** | **0,45 – 0,66** (portrait) | Home, carte « Cours en ligne » |
| 02 | `02-home-bandeau-cours` | 194×172 | **720×640** | 1,13 | Home, bandeau sombre du bas |
| 03 | `03-cours-formule-individuel` | 162×164 | **500×500** | 1,00 (carré) | Page cours, carte « Cours individuels » |
| 04 | `04-cours-formule-groupe` | 192×194 | **500×500** | 1,00 (carré) | Page cours, carte « Cours en petit groupe » |
| 05 | `05-cours-bandeau-final` | 216×126 | **720×420** | 1,71 | Page cours, bandeau « Prêt à vous lancer ? » |
| 06 | `06-cours-avis-sophie` | 50×54 | **200×200** | 1,00 (carré) | Page cours, portrait de Sophie M. |
| 07 | `07-cours-avis-thomas` | 50×54 | **200×200** | 1,00 (carré) | Page cours, portrait de Thomas R. |

Le **hero de la page cours en ligne** n'est pas dans la liste : le client a
fourni un fichier propre en 1760×893, il est déjà en place.

## Trois règles apprises à nos dépens

**Le ratio compte plus que la taille.** Les cadres sont calés sur le ratio des
fichiers actuels. Un visuel livré dans un autre format sera rogné par
`object-cover`, et c'est toujours le haut qui part en premier — donc les
visages. Si le ratio doit changer, dites-le moi : j'ajuste le cadre en même
temps.

**Les visuels 02 et 05 vont sur fond sombre.** Idéalement, leurs bords sont
fondus vers le navy `#060a1f`, comme les heros du site. À défaut, j'applique
le masque `media-fondu`, mais le rendu est meilleur quand le fondu est gravé
dans le fichier.

**Toujours un nouveau nom de fichier.** Les URL d'images optimisées dépendent
de la taille d'écran : à nom identique, certaines tailles restent servies
depuis le cache du navigateur, et le site paraît à jour sur un écran et
inchangé sur un autre. Voir `docs/a-upscaler/README.md`.

## Formats acceptés

PNG, JPEG ou WebP, peu importe : je convertis et j'optimise. Livrez plutôt la
meilleure qualité disponible, sans agrandissement ni accentuation préalable —
un upscaler reconstruit mieux le détail à partir de l'original.
