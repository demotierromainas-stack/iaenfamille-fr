import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageStub } from "@/components/PageStub";
import { parcoursEnfants, getParcours } from "@/data/parcours-enfants";

export function generateStaticParams() {
  return parcoursEnfants.map((p) => ({ tranche: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/formations-enfants/[tranche]">): Promise<Metadata> {
  const { tranche } = await params;
  const p = getParcours(tranche);
  return { title: p ? `Ateliers ${p.tranche}` : "Parcours" };
}

export default async function TranchePage({
  params,
}: PageProps<"/formations-enfants/[tranche]">) {
  const { tranche } = await params;
  const p = getParcours(tranche);
  if (!p) notFound();

  return (
    <PageStub
      eyebrow="Formations enfants"
      title={`Ateliers ${p.tranche}`}
      text={`${p.accroche} — le détail des ${p.ateliers.length} ateliers de ce parcours arrive prochainement.`}
    />
  );
}
