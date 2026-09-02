import type { Metadata } from "next";
import { PenLine } from "lucide-react";
import { EtatVide } from "@/components/EtatVide";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils, retours d'expérience et actualités de l'IA à hauteur de famille.",
};

export default function BlogPage() {
  return (
    <EtatVide
      eyebrow="Blog"
      titre="L'IA à hauteur de famille"
      intro="Des conseils pratiques, des retours d'expérience et de quoi s'y retrouver dans un domaine qui change tous les mois."
      icon={PenLine}
      message="Les premiers articles sont en préparation. En attendant, le guide des parents rassemble déjà l'essentiel de ce qu'il faut savoir pour démarrer."
      cta={{ label: "Lire le guide des parents", href: "/guide-des-parents" }}
    />
  );
}
