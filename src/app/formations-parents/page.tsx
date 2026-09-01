import type { Metadata } from "next";
import { HeroParents } from "@/components/parents/HeroParents";
import { FormationsGrid } from "@/components/parents/FormationsGrid";
import { PackParents } from "@/components/parents/PackParents";

export const metadata: Metadata = {
  title: "Formations parents",
  description:
    "Des formations pratiques pour utiliser l'IA au quotidien, créer des activités et accompagner vos enfants avec confiance et sérénité.",
};

export default function FormationsParentsPage() {
  return (
    <>
      <HeroParents />
      <FormationsGrid />
      <PackParents />
    </>
  );
}
