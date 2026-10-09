import { HeroEnfants } from "@/components/enfants/HeroEnfants";
import { Parcours } from "@/components/enfants/Parcours";
import { Competences } from "@/components/enfants/Competences";
import { Confiance } from "@/components/enfants/Confiance";
import { CtaEnfants } from "@/components/enfants/CtaEnfants";
import { metadonnees } from "@/lib/metadonnees";

export const metadata = metadonnees({
  titre: "Formations enfants",
  description:
    "Vos enfants découvrent, comprennent et créent avec l'IA en toute sécurité, avec des parcours adaptés à chaque âge.",
  chemin: "/formations-enfants",
});

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
