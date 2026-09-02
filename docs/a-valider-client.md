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

## Page « À propos »

Rédigée sans information sur le client. Elle décrit une posture déduite des
maquettes — accompagner les familles, cadre sûr, apprendre ensemble — et
**n'invente délibérément aucun fait vérifiable** : pas de date de création,
pas de nom de fondateur, pas de chiffre (nombre de familles formées, années
d'expérience), pas de photo d'équipe.

Si le client veut une vraie page « qui sommes-nous », il faut son récit :
qui est derrière le projet, pourquoi il l'a lancé, son parcours. Le contenu
actuel est dans `src/data/a-propos.ts`.

## Formulaire de contact

Le formulaire **envoie réellement** les messages, via Resend. Testé de bout
en bout : envoi délivré, saisie incomplète refusée côté serveur, robots
filtrés par un champ leurre.

Deux points restent en attente :

- l'**adresse e-mail du client** qui recevra les demandes ; en attendant, les
  messages arrivent sur l'adresse du compte Resend ;
- le domaine `iaenfamille.fr` n'est **pas encore vérifié** chez Resend, donc
  les envois partent pour l'instant d'une adresse générique. Les
  enregistrements DNS à poser sont dans `deploy/README.md`.

Et une obligation :

- de quoi rédiger une vraie **politique de confidentialité** : qui traite les
  données, combien de temps elles sont conservées, à qui elles sont
  éventuellement transmises. Le formulaire collecte des données
  personnelles, et elles transitent par Resend (sous-traitant à mentionner).
  Cette page ne peut pas rester un texte de remplissage.

## Mentions légales — obligation légale

Elles sont **obligatoires** pour un site professionnel français, et la page
est aujourd'hui vide de tout contenu réel. Informations à demander :

- raison sociale, forme juridique et capital
- numéro SIRET et RCS, numéro de TVA le cas échéant
- adresse du siège
- nom du directeur de la publication
- coordonnées de l'hébergeur

Tant que ces éléments manquent, le site ne devrait pas être mis en
production sur son vrai domaine.

## Le libellé de l'offre

« Stages en présentiel » (home) et « Stages en villa » (maquette enfants)
coexistaient. Le site utilise partout `STAGES_LABEL` dans `src/lib/site.ts` :
si le client tranche pour l'autre, une seule ligne est à changer.
