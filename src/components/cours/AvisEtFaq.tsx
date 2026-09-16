import { Star } from "lucide-react";
import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { Media } from "@/components/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { faqCours, temoignagesCours } from "@/data/cours-en-ligne";
import { Mascotte } from "@/components/Mascotte";

/**
 * La maquette met les avis et la FAQ sur une même ligne, avis à gauche.
 * Les témoignages sont de vraies familles, confirmées par le client.
 */
export function AvisEtFaq() {
  return (
    <section className="relative isolate pb-14 sm:pb-20">
      <Mascotte
        nom="planete"
        className="aspect-[4/3] -top-6 -right-3 w-28 lg:hidden"
        boucle={600}
        parallaxe={30}
        delai={4}
      />
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <Reveal>
              <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Ils en parlent mieux que nous
              </h2>
            </Reveal>

            <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2">
              {temoignagesCours.map((t) => (
                <RevealItem key={t.nom}>
                  <figure className="card flex h-full flex-col p-5">
                    <blockquote className="text-[13px] leading-relaxed text-ink/80">
                      « {t.citation} »
                    </blockquote>

                    <div
                      className="mt-4 flex gap-0.5"
                      aria-label={`Noté ${t.note} sur 5`}
                    >
                      {Array.from({ length: t.note }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 fill-brand-orange text-brand-orange"
                          aria-hidden
                        />
                      ))}
                    </div>

                    <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                      <Media
                        src={t.avatar}
                        label={`Portrait de ${t.nom}`}
                        tone="warm"
                        sizes="40px"
                        className="size-10 shrink-0 rounded-full"
                      />
                      <span>
                        <span className="block text-[12.5px] font-semibold text-ink">
                          {t.nom}
                        </span>
                        <span className="block text-[11.5px] text-muted">
                          {t.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Questions fréquentes
              </h2>
            </Reveal>
            <Reveal className="mt-6" delay={0.08}>
              <Accordion items={faqCours} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
