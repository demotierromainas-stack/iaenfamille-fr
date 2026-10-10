import { HeroEnfants } from "@/components/enfants/HeroEnfants";
import { Parcours } from "@/components/enfants/Parcours";
import { Competences } from "@/components/enfants/Competences";
import { Confiance } from "@/components/enfants/Confiance";
import { CtaEnfants } from "@/components/enfants/CtaEnfants";
import { metadonneesDe } from "@/lib/metadonnees";

export const metadata = metadonneesDe("/formations-enfants");

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
