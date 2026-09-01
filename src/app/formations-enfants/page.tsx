import type { Metadata } from "next";
import { HeroEnfants } from "@/components/enfants/HeroEnfants";
import { Parcours } from "@/components/enfants/Parcours";
import { Competences } from "@/components/enfants/Competences";
import { Confiance } from "@/components/enfants/Confiance";
import { CtaEnfants } from "@/components/enfants/CtaEnfants";

export const metadata: Metadata = {
  title: "Formations enfants",
  description:
    "Vos enfants découvrent, comprennent et créent avec l'IA en toute sécurité, avec des parcours adaptés à chaque âge.",
};

export default function FormationsEnfantsPage() {
  return (
    <>
      <HeroEnfants />
      <Parcours />
      <Competences />
      <Confiance />
      <CtaEnfants />
    </>
  );
}
