# À faire valider par le client

Les pages **Stages en présentiel** et **France / Île Maurice / Dubaï** n'avaient
pas de maquette. Leur structure a été déduite de ce que la home annonce
(séjours de 4 jours, ateliers en famille, encadrement bienveillant), et leur
contenu a été **rédigé faute d'information**. Tout ce qui suit est une
proposition, pas une donnée fournie.

## Informations volontairement absentes

Elles engagent commercialement le client : rien n'a été inventé.

- **Tarifs des stages** — la page renvoie vers le formulaire de contact
- **Dates et calendrier de la saison** — même traitement
- Les fiches destination affichent « saison » (Printemps et été, Toute
  l'année, Automne à printemps) : à confirmer

## Contenu rédigé à valider

Tout est regroupé dans deux fichiers, faciles à corriger sans toucher au code :

| Fichier | Contenu |
|---|---|
| `src/data/stages.ts` | Principe du séjour, déroulé d'une journée type, prestations incluses et non incluses, 5 questions/réponses de la FAQ |
| `src/data/destinations.ts` | Pour chaque destination : chapô, 3 atouts, hébergement, programme des 4 jours, infos pratiques |

Points qui méritent une relecture attentive :

- Le **déroulé de journée** (atelier famille 9 h, ateliers par âge 11 h, temps
  libre 14 h, restitution 17 h) est une hypothèse de rythme
- Les **tailles de groupe** (6 à 8 familles) sont supposées
- Les **hébergements décrits** (bastide provençale, villa sur le lagon,
  résidence à Dubaï) sont plausibles mais fictifs
- La mention « **francophone** » pour l'île Maurice et les temps de trajet
  annoncés sont à vérifier

## Visuels manquants

Ces emplacements affichent aujourd'hui un dégradé de marque portant le libellé
de la photo attendue. Ils sont tous rendus par `src/components/Media.tsx` :
déposer les fichiers et renseigner leur chemin dans `src/data/destinations.ts`
suffit.

- **Hébergement**, une photo par destination (3)
- **Galerie**, trois photos par destination (9)
- **Hero de la page stages** : actuellement un montage des trois photos de
  destination issues de la maquette, à remplacer par une vraie photo large

## Le libellé de l'offre

« Stages en présentiel » (home) et « Stages en villa » (maquette enfants)
coexistaient. Le site utilise partout `STAGES_LABEL` dans `src/lib/site.ts` :
si le client tranche pour l'autre, une seule ligne est à changer.
