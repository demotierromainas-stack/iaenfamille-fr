import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { IconBadge } from "@/components/IconBadge";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem, LiftCard } from "@/components/Reveal";
import { approche, convictions, valeurs } from "@/data/a-propos";
import { STAGES_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Notre mission : rendre l'intelligence artificielle accessible, utile et sereine pour toutes les familles.",
};

export default function AProposPage() {
  return (
    <>
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                À propos
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-tight text-navy-900">
                L&apos;IA n&apos;est pas
                <br />
                <span className="text-gradient">une affaire d&apos;experts</span>
              </h1>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                Elle est déjà entrée dans les maisons, souvent par la porte des
                enfants. Notre travail consiste à faire en sorte que les parents
                ne restent pas sur le pas de la porte.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Media
                src="/images/parents/hero-parents-hd.webp"
                label="Des parents et leur enfant découvrant l'IA ensemble"
                tone="warm"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[16/10] w-full rounded-2xl"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {convictions.map(({ icon, titre, texte }) => (
              <RevealItem key={titre}>
                <article className="card h-full p-6">
                  <IconBadge icon={icon} tone="violet" />
                  <h2 className="mt-4 font-display text-lg font-bold text-ink">
                    {titre}
                  </h2>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                    {texte}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <SectionHeading
            title="Ce à quoi nous tenons"
            subtitle="Quatre principes qui décident du contenu de chaque atelier."
          />
          <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map(({ icon, titre, texte }) => (
              <RevealItem key={titre}>
                <LiftCard>
                  <article className="card h-full p-5">
                    <IconBadge icon={icon} tone="light" />
                    <h3 className="mt-4 font-display text-[15px] font-bold text-ink">
                      {titre}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                      {texte}
                    </p>
                  </article>
                </LiftCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hero-glow animate-drift mix-blend-screen"
            />
            <div className="relative">
              <SectionHeading
                title="Comment nous travaillons"
                subtitle="Le même fil conducteur, que ce soit en ligne ou en présentiel."
                onDark
              />
              <RevealGroup className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {approche.map(({ etape, titre, texte }) => (
                  <RevealItem key={etape}>
                    <div>
                      <span className="font-display text-2xl font-extrabold text-brand-cyan">
                        {etape}
                      </span>
                      <h3 className="mt-2 font-display text-[15px] font-bold">
                        {titre}
                      </h3>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-white/55">
                        {texte}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[28px]">
              Par où commencer ?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Les formations en ligne pour avancer à votre rythme, les stages
              pour tout découvrir en quatre jours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/formations-parents" size="lg">
                Voir les formations
              </Button>
              <Button href={STAGES_HREF} variant="outline" size="lg">
                Découvrir les stages
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
