# Images montées en résolution — terminé

Les 42 visuels ont été upscalés (×4, ×6 pour les avatars d'âge) et intégrés
au site le 1er septembre 2026. Ils vivent désormais dans `public/images/`,
suffixés `-hd`.

Ce dossier ne sert plus qu'à conserver les sources : si un visuel doit être
recadré ou retraité, repartir d'ici plutôt que de la maquette.

`originaux-non-upscales/` garde les crops en résolution native, tels que
découpés dans les maquettes.

## Refaire l'opération

Si de nouveaux visuels sont découpés dans une maquette, les exporter ici en
PNG à leur **résolution native, sans agrandissement ni accentuation** : un
upscaler IA reconstruit mieux le détail à partir de l'original.

Deux précautions apprises à nos dépens :

- **Ne jamais réécrire un fichier de ce dossier depuis un script de build.**
  C'est arrivé aux deux heros, dont les versions upscalées ont été écrasées
  par les crops bruts.
- **Toujours changer le nom du fichier** quand un visuel est remplacé. Les URL
  d'images optimisées dépendent de la taille d'écran : à nom identique,
  certaines tailles restent servies depuis le cache du navigateur, ce qui
  donne un site à jour sur un écran et inchangé sur un autre.

## Visuels encore manquants

Ils s'affichent en dégradé de marque portant le libellé de la photo attendue,
et sont listés dans `docs/a-valider-client.md` : hébergement et galerie des
trois destinations (12 photos), plus une vraie photo large pour le hero de la
page stages, aujourd'hui un montage des trois destinations.
