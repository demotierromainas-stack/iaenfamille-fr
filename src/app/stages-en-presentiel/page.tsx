import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Stages en présentiel" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Stages"
      title="Stages en présentiel"
      text="Des expériences immersives de 4 jours pour parents et enfants, dans des lieux d'exception en France, à l'île Maurice et à Dubaï."
    />
  );
}
