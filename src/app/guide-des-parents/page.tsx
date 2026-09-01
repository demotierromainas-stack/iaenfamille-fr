import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Guide des parents" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Ressources"
      title="Guide des parents"
      text="Un guide clair pour accompagner vos enfants dans leur découverte de l'IA."
    />
  );
}
