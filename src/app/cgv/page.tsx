import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Conditions générales de vente" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Légal"
      title="Conditions générales de vente"
      text="Les conditions applicables à l'achat de nos formations et de nos stages."
    />
  );
}
