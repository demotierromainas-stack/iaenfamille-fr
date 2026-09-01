import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Contact"
      title="Contact"
      text="Une question sur nos formations ou nos stages ? Notre équipe vous répond."
    />
  );
}
