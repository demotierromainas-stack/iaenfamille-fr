import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { destinations } from "@/data/destinations";
import { STAGES_HREF } from "@/lib/site";

export function DestinationsStages() {
  return (
    <section id="destinations" className="scroll-mt-24 pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Trois destinations, un même programme"
          subtitle="Le contenu des ateliers ne change pas. Ce qui change, c'est ce qu'on voit par la fenêtre."
        />

        <RevealGroup className="mt-9 grid gap-5 md:grid-cols-3">
          {destinations.map((d) => (
            <RevealItem key={d.slug}>
              <LiftCard>
                <article className="card flex h-full flex-col overflow-hidden">
                  <Media
                    src={d.image}
                    label={d.heroLabel}
                    tone={d.tone}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="aspect-[16/10] w-full"
                  />

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                      <span aria-hidden>{d.flag}</span>
                      {d.name}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                      {d.teaser}
                    </p>

                    <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4 text-[11.5px]">
                      <div>
                        <dt className="text-muted">Saison</dt>
                        <dd className="font-semibold text-ink">{d.pratique.saison}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">Groupe</dt>
                        <dd className="font-semibold text-ink">{d.pratique.groupe}</dd>
                      </div>
                    </dl>

                    <Link
                      href={`${STAGES_HREF}/${d.slug}`}
                      className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-[13px] font-semibold text-brand-indigo"
                    >
                      Découvrir {d.name}
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              </LiftCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
