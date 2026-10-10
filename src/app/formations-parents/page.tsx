import { HeroParents } from "@/components/parents/HeroParents";
import { FormationsGrid } from "@/components/parents/FormationsGrid";
import { PackParents } from "@/components/parents/PackParents";
import { DonneesStructurees } from "@/components/DonneesStructurees";
import { formationsParents } from "@/data/formations-parents";
import { metadonneesDe } from "@/lib/metadonnees";
import { listeDeCours } from "@/lib/donnees-structurees";

export const metadata = metadonneesDe("/formations-parents");

export default function FormationsParentsPage() {
  return (
    <>
      <DonneesStructurees donnees={listeDeCours(formationsParents)} />
      <HeroParents />
      <FormationsGrid />
      <PackParents />
    </>
  );
}
