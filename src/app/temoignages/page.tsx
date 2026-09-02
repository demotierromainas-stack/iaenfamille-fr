import type { Metadata } from "next";
import { MessagesSquare } from "lucide-react";
import { EtatVide } from "@/components/EtatVide";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Ce que les familles retiennent de nos formations et de nos stages.",
};

/**
 * Aucun témoignage n'est inventé : des avis fabriqués constituent une
 * pratique commerciale trompeuse (art. L121-2 du code de la consommation).
 * La page attend les retours réels des premières familles.
 */
export default function TemoignagesPage() {
  return (
    <EtatVide
      eyebrow="Témoignages"
      titre="Ce qu'en disent les familles"
      intro="Les premières familles viennent tout juste de commencer. Plutôt que de publier des avis de complaisance, nous préférons attendre les leurs."
      icon={MessagesSquare}
      message="Vous avez suivi une formation ou participé à un stage ? Votre retour nous intéresse vraiment — et il aidera les familles qui hésitent encore."
      cta={{ label: "Partager mon expérience", href: "/contact" }}
    />
  );
}
