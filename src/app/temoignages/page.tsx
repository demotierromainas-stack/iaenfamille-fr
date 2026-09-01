import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Témoignages" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Ressources"
      title="Témoignages"
      text="Ce que les familles retiennent de nos formations et de nos stages."
    />
  );
}
