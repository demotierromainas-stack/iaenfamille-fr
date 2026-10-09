import { HeroParents } from "@/components/parents/HeroParents";
import { FormationsGrid } from "@/components/parents/FormationsGrid";
import { PackParents } from "@/components/parents/PackParents";
import { DonneesStructurees } from "@/components/DonneesStructurees";
import { formationsParents } from "@/data/formations-parents";
import { metadonnees } from "@/lib/metadonnees";
import { listeDeCours } from "@/lib/donnees-structurees";

export const metadata = metadonnees({
  titre: "Formations parents",
  description:
    "Des formations pratiques pour utiliser l'IA au quotidien, créer des activités et accompagner vos enfants avec confiance et sérénité.",
  chemin: "/formations-parents",
});

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
