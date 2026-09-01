import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Blog" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Ressources"
      title="Blog"
      text="Conseils, retours d'expérience et actualités de l'IA à hauteur de famille."
    />
  );
}
