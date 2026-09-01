import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Formations enfants" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Formations enfants"
      title="Formations enfants"
      text="Vos enfants découvrent, comprennent et créent avec l'IA en toute sécurité, avec des parcours adaptés à chaque âge."
    />
  );
}
