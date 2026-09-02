import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Clock,
  GraduationCap,
  Infinity as InfinityIcon,
  MonitorPlay,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Media } from "@/components/Media";
import { IconBadge } from "@/components/IconBadge";
import { Reveal, RevealGroup, RevealItem, LiftCard } from "@/components/Reveal";
import { formationsParents, packParents } from "@/data/formations-parents";

export function generateStaticParams() {
  return formationsParents.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/formations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const f = formationsParents.find((x) => x.slug === slug);
  if (!f) return { title: "Formation" };
  return { title: f.titre, description: f.resume };
}

const format = [
  { icon: MonitorPlay, titre: "En vidéo", texte: "Des modules courts, à suivre quand vous voulez." },
  { icon: InfinityIcon, titre: "Accès à vie", texte: "Revenez-y autant de fois que nécessaire." },
  { icon: RefreshCw, titre: "Mises à jour", texte: "Le contenu suit l'évolution des outils." },
  { icon: ShieldCheck, titre: "Sans engagement", texte: "30 jours pour changer d'avis." },
];

export default async function FormationPage({
  params,
}: PageProps<"/formations/[slug]">) {
  const { slug } = await params;
  const f = formationsParents.find((x) => x.slug === slug);
  if (!f) notFound();

  const autres = formationsParents.filter((x) => x.slug !== f.slug).slice(0, 3);

  return (
    <>
      <section className="pt-24 pb-12 sm:pt-28">
        <Container>
          <Reveal>
            <Link
              href="/formations-parents"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-muted transition-colors hover:text-brand-indigo"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
              Toutes les formations parents
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
            <Reveal>
              <div className="flex items-center gap-3">
                <IconBadge icon={f.icon} tone="indigo" size="lg" />
                <span className="rounded-full bg-brand-indigo/10 px-3 py-1 text-[11px] font-semibold text-brand-indigo">
                  Formation parents
                </span>
              </div>

              <h1 className="mt-5 font-display text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-[1.08] tracking-tight text-navy-900">
                {f.titre}
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {f.resume}
              </p>

              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[13px]">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-brand-indigo" aria-hidden />
                  <dt className="sr-only">Durée</dt>
                  <dd className="font-semibold text-ink">{f.duree}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="size-4 text-brand-indigo" aria-hidden />
                  <dt className="sr-only">Niveau</dt>
                  <dd className="font-semibold text-ink">{f.niveau}</dd>
                </div>
              </dl>

              <p className="mt-6 rounded-xl bg-surface p-4 text-[13px] leading-relaxed text-muted">
                <span className="font-semibold text-ink">Pour qui ?</span>{" "}
                {f.pourQui}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Media
                src={f.image}
                label={f.titre}
                tone="warm"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="aspect-[16/10] w-full rounded-2xl"
              />

              <div className="card mt-5 p-6">
                <p className="font-display text-3xl font-extrabold text-ink">
                  {f.prix} €
                </p>
                <p className="mt-1 text-[12px] text-muted">
                  Paiement unique, accès à vie.
                </p>
                <Button href="/mon-compte" size="lg" className="mt-5 w-full">
                  Accéder à la formation
                </Button>
                <p className="mt-3 text-center text-[11.5px] text-muted">
                  Ou{" "}
                  <Link
                    href="/formations-parents#pack"
                    className="font-semibold text-brand-indigo hover:underline"
                  >
                    les 8 formations pour {packParents.prix} €
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="card h-full p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                  Ce que vous saurez faire
                </h2>
                <ul className="mt-6 space-y-4">
                  {f.objectifs.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-indigo/10">
                        <Check className="size-3 text-brand-indigo" aria-hidden />
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-ink/80">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <RevealGroup className="card space-y-5 p-6 sm:p-8" stagger={0.07}>
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                Comment ça se passe
              </h2>
              {format.map(({ icon: Icon, titre, texte }) => (
                <RevealItem key={titre}>
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-indigo/10">
                      <Icon className="size-4 text-brand-indigo" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[13px] font-semibold text-ink">{titre}</h3>
                      <p className="mt-1 text-[11.5px] leading-snug text-muted">
                        {texte}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <h2 className="font-display text-xl font-bold tracking-tight text-ink">
            Ces formations peuvent aussi vous intéresser
          </h2>
          <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-3">
            {autres.map((a) => (
              <RevealItem key={a.slug}>
                <LiftCard>
                  <Link
                    href={`/formations/${a.slug}`}
                    className="card group flex h-full flex-col overflow-hidden"
                  >
                    <Media
                      src={a.image}
                      label={a.titre}
                      tone="warm"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="aspect-[16/9] w-full"
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-display text-[14px] font-bold leading-snug text-ink">
                        {a.titre}
                      </h3>
                      <p className="mt-auto pt-4 font-display text-lg font-extrabold text-ink">
                        {a.prix} €
                      </p>
                    </div>
                  </Link>
                </LiftCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
