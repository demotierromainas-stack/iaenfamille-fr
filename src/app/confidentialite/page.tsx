import type { Metadata } from "next";
import Link from "next/link";
import { PageLegale, Article, AComplet } from "@/components/PageLegale";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données nous collectons, pourquoi, combien de temps, et comment exercer vos droits.",
};

export default function ConfidentialitePage() {
  return (
    <PageLegale titre="Politique de confidentialité" miseAJour="2 septembre 2026">
      <Article titre="Responsable du traitement">
        <p>
          <AComplet>raison sociale et adresse</AComplet>, joignable à
          l&apos;adresse <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </Article>

      <Article titre="Les données que nous collectons">
        <p>Nous ne collectons que ce qui est nécessaire :</p>
        <ul>
          <li>
            <strong>Formulaire de contact</strong> : nom, adresse e-mail, sujet
            et contenu du message.
          </li>
          <li>
            <strong>Newsletter</strong> : adresse e-mail uniquement.
          </li>
          <li>
            <strong>Achat d&apos;une formation</strong> : nom, e-mail et données
            de facturation. <AComplet>à confirmer selon la solution de paiement retenue</AComplet>
          </li>
        </ul>
        <p>
          Le site ne dépose aucun cookie publicitaire et n&apos;utilise aucun
          traceur à des fins de profilage.
        </p>
      </Article>

      <Article titre="Pourquoi nous les traitons">
        <ul>
          <li>Répondre à vos demandes — base légale : votre consentement.</li>
          <li>
            Vous donner accès aux formations achetées — base légale :
            l&apos;exécution du contrat.
          </li>
          <li>
            Vous envoyer notre newsletter, si vous l&apos;avez demandé — base
            légale : votre consentement, révocable à tout moment.
          </li>
        </ul>
      </Article>

      <Article titre="Combien de temps nous les conservons">
        <ul>
          <li>Messages de contact : <AComplet>durée à définir, usuellement 3 ans</AComplet></li>
          <li>Newsletter : jusqu&apos;à votre désinscription</li>
          <li>
            Données de facturation : 10 ans, conformément aux obligations
            comptables
          </li>
        </ul>
      </Article>

      <Article titre="Qui y a accès">
        <p>
          Vos données ne sont ni vendues ni cédées. Elles sont traitées par
          notre équipe et par les prestataires techniques strictement
          nécessaires au fonctionnement du site :
        </p>
        <ul>
          <li>
            <strong>Resend</strong> — acheminement des e-mails du formulaire de
            contact. Les données transitent par ses serveurs situés dans
            l&apos;Union européenne.
          </li>
          <li>
            <strong>Hébergeur du site</strong> —{" "}
            <AComplet>à préciser une fois l&apos;hébergement définitif choisi</AComplet>
          </li>
        </ul>
      </Article>

      <Article titre="Vos droits">
        <p>
          Conformément au Règlement général sur la protection des données, vous
          disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation, d&apos;opposition et de portabilité
          sur vos données.
        </p>
        <p>
          Pour les exercer, écrivez-nous à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. Nous répondons dans
          un délai d&apos;un mois. Si notre réponse ne vous satisfait pas, vous
          pouvez saisir la CNIL.
        </p>
      </Article>

      <Article titre="Les données des enfants">
        <p>
          Les comptes sont créés et gérés par les parents. Les créations
          réalisées par les enfants pendant nos ateliers ne sont jamais publiées
          ni utilisées à des fins de communication sans accord écrit préalable
          du représentant légal.
        </p>
      </Article>

      <Article titre="Modifications">
        <p>
          Cette politique peut évoluer. Toute modification substantielle sera
          signalée sur cette page. Voir également nos{" "}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>
      </Article>
    </PageLegale>
  );
}
