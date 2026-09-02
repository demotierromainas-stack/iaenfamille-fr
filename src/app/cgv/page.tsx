import type { Metadata } from "next";
import Link from "next/link";
import { PageLegale, Article, AComplet } from "@/components/PageLegale";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Les conditions applicables à l'achat de nos formations en ligne et de nos stages.",
};

export default function CgvPage() {
  return (
    <PageLegale
      titre="Conditions générales de vente"
      miseAJour="2 septembre 2026"
    >
      <Article titre="Objet">
        <p>
          Les présentes conditions régissent la vente des formations en ligne et
          des stages en présentiel proposés sur {site.domain} par{" "}
          <AComplet>raison sociale</AComplet>.
        </p>
        <p>
          Toute commande implique l&apos;acceptation pleine et entière des
          présentes conditions.
        </p>
      </Article>

      <Article titre="Prix et paiement">
        <p>
          Les prix sont indiqués en euros, toutes taxes comprises. Les
          formations parents sont proposées à 99 € l&apos;unité, et le Pack
          Parents Ultime réunissant les huit formations à 499 €.
        </p>
        <p>
          Les tarifs des stages en présentiel sont communiqués sur demande, en
          fonction de la destination et de la saison.
        </p>
        <p>
          Le paiement s&apos;effectue en ligne au moment de la commande.{" "}
          <AComplet>moyens de paiement acceptés à préciser</AComplet>
        </p>
      </Article>

      <Article titre="Accès aux formations">
        <p>
          L&apos;accès est ouvert immédiatement après validation du paiement,
          depuis votre espace personnel. Il est accordé sans limitation de
          durée, pour un usage personnel et familial, et ne peut être cédé ni
          partagé.
        </p>
      </Article>

      <Article titre="Droit de rétractation">
        <p>
          Conformément aux articles L221-18 et suivants du code de la
          consommation, vous disposez d&apos;un délai de quatorze jours pour
          exercer votre droit de rétractation, sans avoir à vous justifier.
        </p>
        <p>
          Nous allons volontairement au-delà : <strong>30 jours</strong> pour
          changer d&apos;avis sur une formation en ligne.
        </p>
        <p>
          Pour un contenu numérique dont l&apos;exécution a commencé avec votre
          accord exprès avant la fin du délai légal, le droit de rétractation ne
          s&apos;applique plus au titre de l&apos;article L221-28 13°. La
          garantie commerciale de 30 jours reste, elle, acquise.
        </p>
      </Article>

      <Article titre="Stages en présentiel">
        <p>
          L&apos;inscription à un stage est confirmée à réception de
          l&apos;acompte. Les conditions d&apos;annulation, le calendrier des
          versements et les prestations incluses sont détaillés dans le contrat
          de séjour remis avant toute inscription.
        </p>
        <p>
          <AComplet>conditions d&apos;annulation et barème à définir avec le client</AComplet>
        </p>
      </Article>

      <Article titre="Réclamations et médiation">
        <p>
          Pour toute réclamation, écrivez-nous à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>
          Conformément à l&apos;article L612-1 du code de la consommation, vous
          pouvez recourir gratuitement à un médiateur de la consommation.{" "}
          <AComplet>médiateur à désigner — adhésion obligatoire pour un professionnel vendant à des particuliers</AComplet>
        </p>
      </Article>

      <Article titre="Droit applicable">
        <p>
          Les présentes conditions sont soumises au droit français. Voir
          également nos <Link href="/mentions-legales">mentions légales</Link> et
          notre <Link href="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Article>
    </PageLegale>
  );
}
