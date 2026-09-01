import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Formations parents" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Formations parents"
      title="Formations parents"
      text="Des formations pratiques pour utiliser l'IA au quotidien, créer des activités et accompagner vos enfants avec confiance et sérénité."
    />
  );
}
