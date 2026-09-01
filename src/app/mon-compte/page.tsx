import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Mon compte" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Espace membre"
      title="Mon compte"
      text="L'espace membre ouvrira avec le lancement des formations : vous y retrouverez vos parcours et vos ressources."
    />
  );
}
