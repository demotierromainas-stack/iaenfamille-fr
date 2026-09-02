import type { Metadata } from "next";
import Link from "next/link";
import { PageLegale, Article, AComplet } from "@/components/PageLegale";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergeur et informations légales du site.",
};

export default function MentionsLegalesPage() {
  return (
    <PageLegale titre="Mentions légales" miseAJour="2 septembre 2026">
      <Article titre="Éditeur du site">
        <p>
          Le site {site.domain} est édité par{" "}
          <AComplet>raison sociale à fournir</AComplet>, société{" "}
          <AComplet>forme juridique</AComplet> au capital de{" "}
          <AComplet>montant</AComplet>, immatriculée au RCS de{" "}
          <AComplet>ville et numéro</AComplet>, dont le siège social est situé{" "}
          <AComplet>adresse complète</AComplet>.
        </p>
        <p>
          Numéro SIRET : <AComplet>à fournir</AComplet> — Numéro de TVA
          intracommunautaire : <AComplet>à fournir</AComplet>.
        </p>
        <p>
          Contact : <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </Article>

      <Article titre="Directeur de la publication">
        <p>
          <AComplet>nom et qualité du directeur de la publication</AComplet>
        </p>
      </Article>

      <Article titre="Hébergement">
        <p>
          Le site est hébergé par <AComplet>nom de l&apos;hébergeur</AComplet>,{" "}
          <AComplet>adresse</AComplet>, <AComplet>téléphone</AComplet>.
        </p>
      </Article>

      <Article titre="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus présents sur ce site — textes, images,
          vidéos, supports de formation — est protégé par le droit d&apos;auteur.
          Toute reproduction ou diffusion, totale ou partielle, sans
          autorisation écrite préalable est interdite.
        </p>
        <p>
          Les supports remis dans le cadre des formations sont destinés à un
          usage strictement personnel et familial.
        </p>
      </Article>

      <Article titre="Responsabilité">
        <p>
          Les informations publiées sur ce site sont fournies à titre indicatif.
          Les outils d&apos;intelligence artificielle évoluant rapidement,
          certaines descriptions peuvent ne plus correspondre exactement à leur
          version la plus récente.
        </p>
      </Article>

      <Article titre="Données personnelles">
        <p>
          Le traitement de vos données est détaillé dans notre{" "}
          <Link href="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Article>
    </PageLegale>
  );
}
