import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { parcoursEnfants, getParcours, competences } from "@/data/parcours-enfants";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return parcoursEnfants.map((p) => ({ tranche: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/formations-enfants/[tranche]">): Promise<Metadata> {
  const { tranche } = await params;
  const p = getParcours(tranche);
  if (!p) return { title: "Parcours" };
  return {
    title: `Ateliers ${p.tranche}`,
    description: `${p.accroche} — ${p.ateliers.length} ateliers pour les ${p.tranche}.`,
  };
}

const accents = {
  violet: { texte: "text-brand-violet", fond: "bg-brand-violet/5", ring: "ring-brand-violet/15" },
  blue: { texte: "text-brand-blue", fond: "bg-brand-blue/5", ring: "ring-brand-blue/15" },
  teal: { texte: "text-teal-600", fond: "bg-brand-cyan/5", ring: "ring-brand-cyan/20" },
} as const;

export default async function TranchePage({
  params,
}: PageProps<"/formations-enfants/[tranche]">) {
  const { tranche } = await params;
  const p = getParcours(tranche);
  if (!p) notFound();

  const a = accents[p.accent];
  const autres = parcoursEnfants.filter((x) => x.slug !== p.slug);

  return (
    <>
      <section className={cn("pt-24 pb-12 sm:pt-28", a.fond)}>
        <Container>
          <Reveal>
            <Link
              href="/formations-enfants"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
              Tous les parcours enfants
            </Link>
          </Reveal>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Reveal>
              <Media
                src={p.avatar}
                label={`Enfant de ${p.tranche}`}
                tone="kids"
                sizes="120px"
                className="size-24 rounded-2xl"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className={cn("font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-none tracking-tight", a.texte)}>
                {p.tranche}
              </h1>
              <p className="mt-2 font-display text-lg font-semibold text-ink">
                {p.accroche}
              </p>
              <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-muted">
                {p.ateliers.length} ateliers pensés pour cet âge, à suivre dans
                l&apos;ordre ou en piochant selon les envies.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            title="Les ateliers du parcours"
            subtitle="Chaque atelier se termine par quelque chose que votre enfant a créé."
            align="left"
          />
          <RevealGroup className="mt-8 space-y-4">
            {p.ateliers.map((at, i) => (
              <RevealItem key={at.titre}>
                <article className={cn("card flex items-start gap-5 p-5 ring-1", a.ring)}>
                  <span className={cn("font-display text-2xl font-extrabold", a.texte)}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Media
                    src={at.image}
                    label=""
                    tone="kids"
                    sizes="80px"
                    className="size-16 shrink-0 rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className={cn("font-display text-[15px] font-bold", a.texte)}>
                      {at.titre}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {at.texte}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <div className="card p-6 sm:p-9">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink">
              Ce que votre enfant y développe
            </h2>
            <RevealGroup className="mt-7 grid gap-6 sm:grid-cols-3 lg:grid-cols-5" stagger={0.06}>
              {competences.map((c) => (
                <RevealItem key={c.titre}>
                  <div className="flex items-start gap-3">
                    <Media
                      src={c.image}
                      label=""
                      tone="kids"
                      sizes="56px"
                      className="size-11 shrink-0 rounded-full"
                    />
                    <div>
                      <h3 className="text-[12.5px] font-semibold text-ink">{c.titre}</h3>
                      <p className="mt-1 text-[11px] leading-snug text-muted">{c.texte}</p>
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
          <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 p-8 text-white">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 hero-glow animate-drift mix-blend-screen"
                />
                <div className="relative">
                  <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    Prêt à démarrer le parcours {p.tranche} ?
                  </h2>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Contenus adaptés à l'âge, sans publicité",
                      "Encadrement par des experts de l'éducation",
                      "Rien n'est publié sans votre accord",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[13px] text-white/75">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-cyan" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href="/mon-compte" size="lg">
                      Commencer le parcours
                    </Button>
                    <Button href="/contact" variant="outline-light" size="lg">
                      Poser une question
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              <h2 className="font-display text-[15px] font-bold text-ink">
                Les autres tranches d&apos;âge
              </h2>
              {autres.map((o) => (
                <Link
                  key={o.slug}
                  href={`/formations-enfants/${o.slug}`}
                  className="group card flex items-center gap-4 p-4 transition-shadow hover:shadow-lift"
                >
                  <Media
                    src={o.avatar}
                    label=""
                    tone="kids"
                    sizes="80px"
                    className="size-14 shrink-0 rounded-xl"
                  />
                  <span className="flex-1">
                    <span className={cn("block font-display text-[15px] font-bold", accents[o.accent].texte)}>
                      {o.tranche}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-muted">
                      {o.accroche}
                    </span>
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
