import type { Metadata } from "next";
import { HeroCours } from "@/components/cours/HeroCours";
import { FormatsCours } from "@/components/cours/FormatsCours";
import { PourquoiAnimateur } from "@/components/cours/PourquoiAnimateur";
import { DerouleSeance } from "@/components/cours/DerouleSeance";
import { ParAge } from "@/components/cours/ParAge";
import { CadreCours } from "@/components/cours/CadreCours";
import { FaqCours } from "@/components/cours/FaqCours";
import { CtaCours } from "@/components/cours/CtaCours";
import { COURS_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: COURS_LABEL,
  description:
    "Des cours d'IA en visio pour les enfants, accompagnés par un animateur. En petit groupe de 4 à 6 enfants ou en cours particulier, dès 5 ans.",
};

export default function CoursEnLignePage() {
  return (
    <>
      <HeroCours />
      <FormatsCours />
      <PourquoiAnimateur />
      <DerouleSeance />
      <ParAge />
      <CadreCours />
      <FaqCours />
      <CtaCours />
    </>
  );
}
