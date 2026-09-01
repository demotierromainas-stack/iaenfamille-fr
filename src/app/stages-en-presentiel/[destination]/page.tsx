import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, MapPin, UsersRound } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { destinations, getDestination } from "@/data/destinations";
import { STAGES_HREF, STAGES_LABEL } from "@/lib/site";

export function generateStaticParams() {
  return destinations.map((d) => ({ destination: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/stages-en-presentiel/[destination]">): Promise<Metadata> {
  const { destination } = await params;
  const d = getDestination(destination);
  if (!d) return { title: "Destination" };
  return { title: `Stage ${d.name}`, description: d.intro };
}

export default async function DestinationPage({
  params,
}: PageProps<"/stages-en-presentiel/[destination]">) {
  const { destination } = await params;
  const d = getDestination(destination);
  if (!d) notFound();

  const pratique = [
    { icon: CalendarDays, label: "Saison", value: d.pratique.saison },
    { icon: Clock, label: "Durée", value: d.pratique.duree },
    { icon: UsersRound, label: "Groupe", value: d.pratique.groupe },
    { icon: MapPin, label: "Accès", value: d.pratique.acces },
  ];

  return (
    <>
      {/* Hero : la photo occupe tout le cadre, le texte passe dessus */}
      <section className="relative isolate overflow-hidden bg-navy-950 pt-28 pb-12 text-white sm:pt-32 sm:pb-16">
        <Media
          src={d.image}
          label={d.heroLabel}
          tone={d.tone}
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 size-full"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50"
        />

        <Container>
          <Reveal className="max-w-xl">
            <Link
              href={STAGES_HREF}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-cyan transition-colors hover:text-white"
            >
              {STAGES_LABEL}
            </Link>
            <h1 className="mt-4 flex items-center gap-3 font-display text-[clamp(2.25rem,5.5vw,3.5rem)] font-extrabold leading-[1] tracking-tight">
              <span aria-hidden>{d.flag}</span>
              {d.name}
            </h1>
            <p className="mt-3 font-display text-lg font-semibold text-white/80">
              {d.tagline}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              {d.intro}
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Demander le programme
              </Button>
            </div>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pratique.map(({ icon: Icon, label, value }) => (
              <RevealItem key={label}>
                <div className="rounded-2xl border border-white/12 bg-white/5 p-4 backdrop-blur-sm">
                  <Icon className="size-4 text-brand-cyan" aria-hidden />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.1em] text-white/45">
                    {label}
                  </p>
                  <p className="mt-1 text-[13px] font-semibold">{value}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Ce qui distingue le lieu */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading title={`Pourquoi ${d.name}`} />
          <RevealGroup className="mt-9 grid gap-5 md:grid-cols-3">
            {d.atouts.map((a, i) => (
              <RevealItem key={a.titre}>
                <article className="card h-full p-6">
                  <span className="font-display text-3xl font-extrabold text-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[15px] font-bold text-ink">
                    {a.titre}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    {a.texte}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Hébergement */}
      <section className="pb-14 sm:pb-20">
        <Container>
          <Reveal>
            <div className="card grid gap-0 overflow-hidden md:grid-cols-2">
              <Media
                label={d.hebergement.imageLabel}
                tone={d.tone}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/3] w-full md:aspect-auto md:h-full"
              />
              <div className="p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                  Hébergement
                </p>
                <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {d.hebergement.titre}
                </h2>
                <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
                  {d.hebergement.texte}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Le fil des quatre jours */}
      <section className="pb-14 sm:pb-20">
        <Container>
          <SectionHeading
            title="Le programme, jour par jour"
            subtitle="Un fil conducteur commun aux trois destinations, décliné avec ce que le lieu offre."
          />
          <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.programme.map((p) => (
              <RevealItem key={p.jour}>
                <article className="card h-full border-t-2 border-t-brand-indigo/40 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-indigo">
                    {p.jour}
                  </p>
                  <h3 className="mt-2 font-display text-[15px] font-bold text-ink">
                    {p.titre}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    {p.texte}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Galerie — visuels encore à fournir par le client */}
      <section className="pb-14 sm:pb-20">
        <Container>
          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            {d.galerie.map((label) => (
              <RevealItem key={label}>
                <Media
                  label={label}
                  tone={d.tone}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="aspect-[4/3] w-full rounded-2xl"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Les deux autres destinations */}
      <section className="pb-14 sm:pb-20">
        <Container>
          <h2 className="font-display text-xl font-bold tracking-tight text-ink">
            Les autres destinations
          </h2>
          <RevealGroup className="mt-5 grid gap-4 sm:grid-cols-2">
            {destinations
              .filter((o) => o.slug !== d.slug)
              .map((o) => (
                <RevealItem key={o.slug}>
                  <Link
                    href={`${STAGES_HREF}/${o.slug}`}
                    className="group card flex items-center gap-4 overflow-hidden p-3 transition-shadow hover:shadow-lift"
                  >
                    <Media
                      src={o.image}
                      label={o.heroLabel}
                      tone={o.tone}
                      sizes="120px"
                      className="size-20 shrink-0 rounded-xl"
                    />
                    <span className="flex-1">
                      <span className="flex items-center gap-2 font-display text-[15px] font-bold text-ink">
                        <span aria-hidden>{o.flag}</span>
                        {o.name}
                      </span>
                      <span className="mt-1 block text-[12px] text-muted">
                        {o.tagline}
                      </span>
                    </span>
                    <ArrowRight
                      className="size-4 shrink-0 text-brand-indigo transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </RevealItem>
              ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
