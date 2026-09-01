import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Questions fréquentes" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Ressources"
      title="Questions fréquentes"
      text="Les réponses aux questions que se posent le plus souvent les parents."
    />
  );
}
