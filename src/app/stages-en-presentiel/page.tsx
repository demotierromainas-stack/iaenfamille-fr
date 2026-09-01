import type { Metadata } from "next";
import { HeroStages } from "@/components/stages/HeroStages";
import { Principe } from "@/components/stages/Principe";
import { JourneeType } from "@/components/stages/JourneeType";
import { DestinationsStages } from "@/components/stages/DestinationsStages";
import { Inclus } from "@/components/stages/Inclus";
import { FaqStages } from "@/components/stages/FaqStages";
import { CtaStages } from "@/components/stages/CtaStages";
import { STAGES_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: STAGES_LABEL,
  description:
    "Des séjours immersifs de 4 jours pour parents et enfants, en France, à l'île Maurice et à Dubaï. On crée le matin, on profite l'après-midi.",
};

export default function StagesPage() {
  return (
    <>
      <HeroStages />
      <Principe />
      <JourneeType />
      <DestinationsStages />
      <Inclus />
      <FaqStages />
      <CtaStages />
    </>
  );
}
