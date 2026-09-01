import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Mentions légales" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Légal"
      title="Mentions légales"
      text="Éditeur, hébergeur et informations légales du site."
    />
  );
}
