import type { Metadata } from "next";
import { PageStub } from "@/components/PageStub";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Page() {
  return (
    <PageStub
      eyebrow="Légal"
      title="Politique de confidentialité"
      text="Comment nous collectons, utilisons et protégeons vos données personnelles."
    />
  );
}
