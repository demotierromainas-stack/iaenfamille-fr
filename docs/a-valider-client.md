# À faire valider par le client

Ce document rassemble ce que le site avance sans information du client, et
qui doit donc être relu avant la mise en ligne.

## Offres retirées

Le client a abandonné deux offres. Leurs pages, données et visuels ont été
supprimés, et leurs anciennes adresses redirigent vers l'accueil (301, voir
`public/.htaccess`) :

- **Cours en ligne (visio)**, retirés le 16/09/2026
- **Stages en présentiel** et les destinations France / Île Maurice / Dubaï,
  retirés le 20/09/2026

Ce qui les concernait a été retiré de ce document, à une exception près : la
section « Cours en ligne » plus bas est conservée pour ses consignes sur les
visuels, qui valent pour les prochaines images. Elle ne décrit plus le site.

## Cours en ligne (visio) — offre retirée

> Section conservée pour ses consignes sur les visuels (plus bas). L'offre a
> été retirée du site le 16/09/2026 : la page et ses données n'existent plus.

Page refondue sur la **maquette fournie par le client**
(`docs/maquettes/cours-en-ligne-maquette.jpeg`), qui apporte enfin les
éléments commerciaux absents de la première version.

### Ce que la maquette a tranché

| | |
|---|---|
| Cours individuels | **30 € / heure** |
| Cours en petit groupe | **20 € / heure / personne**, 3 participants maximum |
| Pack 10 h individuel | 300 € → **255 €** (−15 %), soit 25,50 €/h |
| Pack 10 h groupe | 200 € → **170 €** (−15 %), soit 17 €/h/personne |

La tarification étant horaire, la séance de 2 h de la version précédente
disparaît.

### Trois écarts assumés par rapport à la maquette

Décidés avec le client, à retenir si quelqu'un compare page et maquette :

- **Public** : la maquette annonce « pour enfants et parents » à deux
  endroits ; le périmètre reste **les enfants**, les parents gardant les
  formations enregistrées.
- **Boutons « Réserver »** : ils mènent au **formulaire de contact**, la
  réservation n'étant pas automatisée. Ce sont les seuls boutons de vente qui
  ne partent pas vers Skool.
- **« À propos »** figure dans le menu de la maquette ; il en a été retiré à
  la demande du client et reste au pied de page.

### Ce qui reste rédigé, donc à relire

- Les **réponses de la FAQ** : la maquette n'affiche que les questions,
  l'accordéon y étant fermé. Deux engagent le client — les **moyens de
  paiement** (carte, au moment de la réservation) et surtout les **conditions
  d'annulation** (report ou annulation sans frais jusqu'à 24 h avant).
- La mention « **créneaux disponibles toute la semaine** » du bandeau final.

### Les témoignages

Sophie M. et Thomas R. sont affichés parce que le client a **confirmé qu'il
s'agit de vraies familles**. C'est la seule raison qui les rend publiables :
la page `/temoignages` reste vide pour la même règle, des avis fabriqués
constituant une pratique commerciale trompeuse (art. L121-2 du code de la
consommation). Si cette confirmation devait être retirée, il faut retirer le
bloc.

### Les visuels

Huit visuels ont été **découpés dans les deux maquettes** — sources natives en
PNG dans `docs/a-upscaler/` (préfixes `cours--` et `home--`), versions servies
en `.webp`. Ils sont donc **en basse définition** : 99 à 216 px de large. À
repasser dans l'upscaler puis à redéposer **sous un nouveau nom**, comme
l'impose `docs/a-upscaler/README.md`.

Seule exception, le **hero** : le client a fourni un fichier propre en
1760×893. Il arrivait à bords francs, le fondu vers le navy `#060a1f` a été
gravé dedans pour qu'il ne se lise pas comme un rectangle posé sur la section
sombre. Sa source d'origine est `docs/a-upscaler/hero-section-coursenligne.png`.

Deux contraintes apprises en intégrant ces visuels, à respecter pour les
prochains :

- **Les photos de carte d'offre doivent être livrées en portrait étroit**
  (ratio ~0,45, comme les existantes) : le cadre est plus haut que large et
  `object-cover` rogne sinon les visages par le haut.
- Un visuel destiné à une **section sombre** doit avoir ses bords fondus vers
  `#060a1f`. À défaut, l'utilitaire `media-fondu` de `globals.css` applique un
  masque radial, mais le résultat est meilleur quand le fondu est dans le
  fichier.

### La home suit la même maquette

`docs/maquettes/home-maquette-v2.jpeg` : les cours en ligne y deviennent une
**quatrième carte d'offre** (la grille passe de 3 à 4 colonnes), complétée par
un **bandeau sombre après les destinations**. Le hero perd son bouton vers les
stages au profit de « Voir nos cours en ligne ».

## Navigation

La barre de navigation avait basculé à `xl` (1280 px) parce que ses six
entrées débordaient en dessous de ~1130 px. Avec le retrait des cours puis
des stages, il n'en reste que quatre — Accueil, Formations parents,
Formations enfants, Contact — et elles tiennent sur une ligne dès 1024 px :
la nav complète est repassée à `lg`. En dessous, le menu déroulant prend le
relais avec les mêmes entrées.

## Formations hébergées sur Skool

Décision prise avec le client : les formations et l'espace membre vivent sur
une **communauté Skool**, pas sur le site. `iaenfamille.fr` reste la vitrine —
il présente l'offre et envoie vers Skool pour l'achat et l'accès.

Conséquence agréable : le site n'a besoin ni d'authentification ni de
paiement, donc il reste **compatible avec l'export statique** décrit dans
`deploy/README.md` (scénario B, mutualisé Infomaniak sans Node.js).

### ⚠️ L'URL actuelle est provisoire

`SKOOL_URL` dans `src/lib/site.ts` pointe aujourd'hui sur
**`https://www.skool.com/@jean-maxime-hanny-7522`**, le lien transmis par le
client le 10/09/2026 et posé à sa demande.

**Ce n'est pas une communauté, c'est un profil membre.** Sur Skool, le « @ »
désigne toujours une personne ; une communauté a une URL sans arobase, du type
`skool.com/nom-de-la-communaute`. Page ouverte et vérifiée le 10/09/2026 :
0 contribution, 0 follower, aucune communauté rattachée, aucune formation en
vente — la bio évoque l'IA et l'immobilier, sans lien avec iaenfamille.

**À remplacer par l'URL de la communauté avant la mise en vente.** En l'état,
un acheteur qui clique « Voir le pack » atterrit sur une fiche de profil vide.
À demander au client — il doit vraisemblablement encore créer la communauté.

Une seule ligne à changer, rien d'autre. Et si l'URL est remise à `""`, les
boutons de vente retombent proprement sur `/contact` et l'entrée « Mon
compte » disparaît du menu.

### La répartition des boutons

Deux familles, et c'est voulu :

| Vont sur **Skool** (vente de contenus enregistrés) | Vont sur **/contact** |
|---|---|
| Accéder à la formation (8 fiches parents) | Poser une question, Demander des infos |
| Voir le pack (Pack Parents Ultime) | |
| Commencer le parcours (3 tranches d'âge) | |
| Mon compte (en-tête et menu mobile) | |

Depuis le retrait des cours et des stages, tout ce qui se vend part sur
Skool ; le formulaire ne reçoit plus que des demandes d'information.

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

