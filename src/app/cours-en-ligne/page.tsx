import type { Metadata } from "next";
import { HeroCours } from "@/components/cours/HeroCours";
import { FormulesCours } from "@/components/cours/FormulesCours";
import { PacksHeures } from "@/components/cours/PacksHeures";
import { CommentCaMarche } from "@/components/cours/CommentCaMarche";
import { AvisEtFaq } from "@/components/cours/AvisEtFaq";
import { CtaCours } from "@/components/cours/CtaCours";
import { COURS_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: COURS_LABEL,
  description:
    "Des cours d'IA en visio pour les enfants, avec un formateur expert. En individuel à 30 € l'heure ou en petit groupe de 3 à 20 € l'heure, dès 5 ans.",
};

export default function CoursEnLignePage() {
  return (
    <>
      <HeroCours />
      <FormulesCours />
      <PacksHeures />
      <CommentCaMarche />
      <AvisEtFaq />
      <CtaCours />
    </>
  );
}
