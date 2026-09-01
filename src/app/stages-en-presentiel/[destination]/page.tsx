import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageStub } from "@/components/PageStub";
import { destinations, getDestination } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ destination: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/stages-en-presentiel/[destination]">): Promise<Metadata> {
  const { destination } = await params;
  const d = getDestination(destination);
  return { title: d ? `Stage ${d.name}` : "Destination" };
}

export default async function DestinationPage({
  params,
}: PageProps<"/stages-en-presentiel/[destination]">) {
  const { destination } = await params;
  const d = getDestination(destination);
  if (!d) notFound();

  return (
    <PageStub
      eyebrow="Stage en présentiel"
      title={`${d.flag} ${d.name}`}
      text={d.teaser}
    />
  );
}
