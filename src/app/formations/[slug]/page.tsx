import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageStub } from "@/components/PageStub";
import { formationsParents } from "@/data/formations-parents";

export function generateStaticParams() {
  return formationsParents.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/formations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const f = formationsParents.find((x) => x.slug === slug);
  return { title: f ? f.titre : "Formation" };
}

export default async function FormationPage({
  params,
}: PageProps<"/formations/[slug]">) {
  const { slug } = await params;
  const f = formationsParents.find((x) => x.slug === slug);
  if (!f) notFound();

  return (
    <PageStub
      eyebrow="Formation parents"
      title={f.titre}
      text={`${f.resume} — ${f.duree}, niveau ${f.niveau.toLowerCase()}, ${f.prix} €.`}
    />
  );
}
