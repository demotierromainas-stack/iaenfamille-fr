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
| `src/data/cours-en-ligne.ts` | Cours en ligne : les 2 formats, apport de l'animateur, déroulé d'une séance, contenu par âge, cadre et matériel, 5 questions/réponses |

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

## Cours en ligne (visio) — nouvelle offre

Demandée oralement par le client : des cours **en visio, avec un animateur**,
en petit groupe ou en cours particulier. Périmètre retenu : **enfants
uniquement** — les parents gardent les formations enregistrées.

Aucune maquette, aucun élément commercial fourni. Tout le contenu de
`src/data/cours-en-ligne.ts` est une proposition, à relire de près.

### Informations volontairement absentes

- **Tarifs**, pour le groupe comme pour le particulier — la page renvoie vers
  le formulaire de contact
- **Créneaux et calendrier de la saison** — même traitement

### Hypothèses à confirmer

Ce sont des chiffres qui engagent le client dès qu'ils sont affichés :

- **4 à 6 enfants** par groupe
- **2 heures** par séance, pour les deux formats — durée fixée par le client
- **1 séance par semaine** en groupe, **à la carte** en particulier
- le **déroulé de séance** (10 min d'accueil, 20 min de découverte, 1 h 10 de
  création, 20 min de restitution) est une hypothèse de rythme, tout comme la
  **pause au milieu** de la phase de création
- la **séance d'essai** annoncée dans la FAQ et le CTA final
- le **rattrapage** en cas d'absence (autre créneau ou résumé écrit)
- le **résumé envoyé après la séance** pour rejouer l'atelier en famille
- « **le même animateur** pour un groupe » et « **une salle privée par
  famille** » : à confirmer selon l'outil de visio retenu

### Le libellé de l'offre

Tranché par le client : « **Cours en ligne** », affiché tel quel dans la nav,
le bandeau de la home et le titre de la page. À noter que le site emploie
aussi « en ligne » pour les formations enregistrées — les deux offres
cohabitent sous le même mot, c'est assumé.

Le libellé passe par `COURS_LABEL` dans `src/lib/site.ts` : une seule ligne à
changer s'il revient dessus. L'URL est `/cours-en-ligne`.

Le client a également demandé de retirer la pastille rose « En direct » qui
signalait le caractère live, sur la home comme dans le hero. Le fait qu'un
animateur soit présent reste dit en toutes lettres dans les textes.

### Point d'attention : 2 heures pour les 5-8 ans

La durée de 2 heures s'applique aux trois tranches d'âge. C'est long en visio
pour les plus jeunes : à voir avec le client s'il souhaite une durée réduite
sur le groupe 5-8 ans, ou si la pause suffit. Les durées vivent dans
`formatsCours` (`src/data/cours-en-ligne.ts`).

### Le visuel du hero

Le hero reprend **exactement le traitement de la page formations enfants** :
le visuel se fond dans le navy (le dégradé est gravé dans les pixels de
l'image, pas en CSS) et reçoit le masque latéral `.hero-media` sur grand
écran.

C'est aussi **le même fichier**, `/images/enfants/hero-enfants-hd.webp` :
c'est le seul visuel haute résolution du site qui montre des enfants devant un
écran. `cta-enfant-hd.webp` ne fait que 720 × 440, trop petit pour un hero.

**Les deux pages partagent donc leur visuel de hero.** Pour les distinguer, il
faut une photo dédiée — idéalement un enfant en séance de visio, casque sur
les oreilles. À demander au client, ou à produire. Elle doit être livrée large
(~2600 px) et avec le même fondu vers le navy `#060a1f`, puis déposée sous un
**nouveau nom** (voir la mise en garde sur le cache dans
`docs/a-upscaler/README.md`).

### Emplacement sur la home

L'offre apparaît en **bandeau sombre sous les trois cartes**, et non en
quatrième carte : les trois cartes gardent ainsi la mise en page de la
maquette. Le bandeau est `src/components/home/CoursEnLigne.tsx`, son texte dans
`src/data/home.ts` (`coursEnLigne`).

### Effet de bord sur la navigation

L'ajout d'une entrée faisait déborder la barre de navigation. Mesuré au
navigateur : les six entrées actuelles passent sur deux lignes en dessous de
~1130 px. La nav complète bascule donc à `xl` (1280 px) au lieu de `lg` ; en
dessous, c'est le menu déroulant qui prend le relais, avec les mêmes entrées.

« À propos » a par ailleurs été retiré du menu d'en-tête à la demande du
client — la page reste au pied de page, donc toujours atteignable et toujours
dans le sitemap.

Piste si le client veut la nav complète dès 1024 px : raccourcir
`STAGES_LABEL` de « Stages en présentiel » à « Stages ». Testé, tout tient sur
une ligne avec de la marge.

## Formations hébergées sur Skool

Décision prise avec le client : les formations et l'espace membre vivent sur
une **communauté Skool**, pas sur le site. `iaenfamille.fr` reste la vitrine —
il présente l'offre et envoie vers Skool pour l'achat et l'accès.

Conséquence agréable : le site n'a besoin ni d'authentification ni de
paiement, donc il reste **compatible avec l'export statique** décrit dans
`deploy/README.md` (scénario B, mutualisé Infomaniak sans Node.js).

### ⚠️ L'URL actuelle est provisoire

`SKOOL_URL` dans `src/lib/site.ts` pointe aujourd'hui sur
**`https://www.skool.com/`**, la page d'accueil de Skool — la communauté
n'étant pas encore créée. C'est un réglage de revue, pour qu'on voie la
différence entre les boutons de vente et les boutons de contact.

**À remplacer par l'URL réelle de la communauté avant toute mise en
production.** En l'état, un acheteur qui clique « Voir le pack » atterrit sur
le site marketing de Skool, pas sur les formations.

Une seule ligne à changer, rien d'autre. Et si l'URL est remise à `""`, les
boutons de vente retombent proprement sur `/contact` et l'entrée « Mon
compte » disparaît du menu.

### La répartition des boutons

Deux familles, et c'est voulu :

| Vont sur **Skool** (vente de contenus enregistrés) | Vont sur **/contact** (vente par échange) |
|---|---|
| Accéder à la formation (8 fiches parents) | Demander un créneau (cours en ligne) |
| Voir le pack (Pack Parents Ultime) | Demander le programme (stages) |
| Commencer le parcours (3 tranches d'âge) | Poser une question, Demander des infos |
| Mon compte (en-tête et menu mobile) | |

Les stages en présentiel et les cours en visio ne se vendent pas en ligne :
ni tarif ni calendrier n'étant arrêtés, ils passent par le formulaire.

### Ce qui a été rebranché

| Endroit | Bouton |
|---|---|
| `src/app/formations/[slug]/page.tsx` | « Accéder à la formation » |
| `src/app/formations-enfants/[tranche]/page.tsx` | « Commencer le parcours » |
| `src/components/parents/PackParents.tsx` | « Voir le pack » |
| `src/components/Header.tsx` | « Mon compte », en-tête et menu mobile |

### La page /mon-compte a été supprimée

Elle annonçait un espace membre à venir sur le site. Elle n'était pas
référencée dans le sitemap, donc sa suppression ne casse aucune URL publique.

Au passage, elle **promettait de suivre l'avancement de chaque enfant
séparément**. Skool ne gère pas de sous-profils : un compte correspond à une
personne, pas à une famille. Si le client tient à cette promesse, il faudra
soit l'assumer autrement sur Skool (un compte par enfant), soit la garder pour
un espace sur mesure ultérieur.

### Points à trancher avant la mise en vente

- **Le libellé des boutons** : tant que `SKOOL_URL` est vide, « Accéder à la
  formation » et « Voir le pack » mènent au formulaire de contact. C'est
  cohérent pour recueillir des demandes avant l'ouverture, mais le libellé
  promet plus que ce qu'il fait.
- **Facturation et TVA** : Skool est américain. Vérifier qu'il produit des
  factures conformes pour une vente à des consommateurs français, sinon
  regarder une alternative européenne.
- Les **CGV** décrivent encore une vente et un accès sur le site
  (`src/app/cgv/page.tsx`) : à réécrire pour refléter l'hébergement sur Skool.

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
