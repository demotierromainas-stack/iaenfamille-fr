import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "À propos" };

export default function Page() {
  return (
    <PageStub
      eyebrow="À propos"
      title="À propos"
      text="Notre mission : rendre l'intelligence artificielle accessible, utile et sereine pour toutes les familles."
    />
  );
}
