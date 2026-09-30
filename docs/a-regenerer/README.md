# Visuels régénérés — ce qui a été fait

Les 20 visuels du site qui portaient des visages ont été refaits en
septembre 2026. Ce dossier garde les sources et la méthode.

## Pourquoi

Ces visuels avaient été découpés dans les maquettes JPEG du client, puis
agrandis ×4 à ×6 par un upscaler. À ces facteurs-là, un upscaler ne restaure
pas un visage : il en invente un. D'où les traits fondus, la peau cireuse, et
sur l'avatar 12–16 ans, deux yeux qui ne pointaient pas dans la même direction.

Ce n'était pas un problème de résolution : les fichiers faisaient à peu près la
bonne taille, c'est le contenu des pixels qui était faux.

## Quel modèle pour quoi

Tout est passé par l'API Higgsfield (`api.higgsfield.ai`), avec deux modèles aux
rôles bien distincts. Les identifiants vivent dans `.env.local`
(`HF_API_KEY_ID`, `HF_API_KEY_SECRET`) et ne doivent jamais être recopiés dans
`deploy/.env`, qui est le modèle du fichier servi sur le serveur.

| Modèle | Endpoint | Pour |
|---|---|---|
| **Soul v2** | `/higgsfield-ai/soul/v2/standard` | Photographies : 8 cartes de formation, carte parents de la home, hero parents/à-propos, cta-enfant, 3 avatars d'âge, vignette « Projets en famille » |
| **Recraft V4.1 Pro** | `/recraft/v4.1/pro/text-to-image` | Rendus 3D : heros home et enfants |

Le site était **hybride** : photo sur les pages intérieures, rendu 3D sur les
heros, conformément aux maquettes. Fin septembre, le client a demandé que les
personnages suivent la charte photo du site : les 3 avatars d'âge et la
vignette « Projets en famille » sont passés en photo (`-v3`). Les deux heros
restent pour l'instant en rendu 3D.

Paramètres utiles : Soul accepte `aspect_ratio` parmi `9:16 16:9 4:3 3:4 1:1
2:3 3:2` et `resolution` en `720p` (1696×960) ou `1080p` (2048×1152). Recraft
sort en 2K natif, accepte 14 ratios dont `1:2`, et permet d'imposer une palette
RGB — à éviter sur des personnages, elle vire toutes les carnations.

## Les heros ne sont pas des photos

Les heros de la home et de la page enfants sont des **montages** : fond navy
`srgb(7,10,32)`, néons dessinés, personnages par-dessus. Ils n'ont pas de canal
alpha — ils se raccordent à la section parce que leur propre fond est le navy
du site. Toute nouvelle version doit conserver ce fond.

La méthode qui a marché : ne faire générer **que les personnages**, sur fond
noir. Le noir perd contre le navy en composition « éclaircir », donc les bords
des cheveux se fondent sans aucun détourage. Les néons sont extraits des
fichiers d'origine par un masque de rectangles flous, puis réincrustés de la
même façon.

## Six pièges, tous payés cher

**Les consignes négatives produisent l'inverse.** « Aucun logo » a donné un logo
Apple sur presque tous les portables ; « aucun texte sur les vêtements » a donné
un grand logo vert sur un t-shirt ; « aucun grain de pellicule » a donné du
grain. Il faut décrire positivement ce qu'on veut, ou retirer après coup.

**« Lissé », « velouté », « doux » donnent des poupées de cire.** Pour des
visages crédibles il faut demander l'inverse : texture de peau, pores, duvet,
fines ridules, mèches individuelles.

**Soul empile des panneaux en format vertical.** Trois essais en 9:16, trois
diptyques ou triptyques. Pour un portrait, générer en paysage et recadrer.

**Soul vieillit les enfants cadrés seuls.** Un enfant seul, ou au premier plan
en gros plan, sort systématiquement en adulte de 18–25 ans, quels que soient
l'âge écrit, la langue ou les indices (« joues rebondies », « dents de lait »
donnent des adultes plus ronds) : 42 essais, 42 adultes. Les enfants
n'apparaissent qu'en **plan moyen, avec un parent, dans une activité** (à table
devant un ordinateur). Pour un avatar, générer cette scène puis recadrer
serré sur l'enfant — environ un essai sur deux est exploitable.

**Le format d'un visuel ne suffit pas, il faut simuler son cadre.** La carte
« Formations parents » n'affiche que les 49 % du haut du fichier sur desktop :
une photo correcte en soi y arrivait décapitée. Simuler la fente avant de
livrer évite trois allers-retours.

**Toujours changer le nom du fichier.** Les URL d'images dépendent de la taille
d'écran : à nom identique, certaines tailles restent servies depuis le cache et
le site paraît à jour sur un écran et inchangé sur un autre. D'où les suffixes
`-v2`, `-v3`… Seule exception : remettre un fichier strictement identique sous
le nom qu'il portait déjà.

## Le dossier

- `recus/` — les sorties brutes des modèles, avant recadrage et conversion.
  Repartir d'ici plutôt que des WebP de `public/`.
- `sources/` — les fichiers qui étaient en place avant, pour comparaison.
