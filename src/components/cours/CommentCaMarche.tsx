import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { etapes } from "@/data/cours-en-ligne";
import { Mascotte } from "@/components/Mascotte";

export function CommentCaMarche() {
  return (
    <section className="relative isolate pb-14 sm:pb-20">
      <Mascotte
        nom="fusee"
        className="aspect-square -top-16 -left-8 w-40 xl:-top-14 xl:left-[max(0rem,calc(50%-40rem))] xl:w-48"
        delai={2}
      />
      <Container>
        <SectionHeading title="Comment ça fonctionne ?" />

        <RevealGroup className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map(({ icon: Icon, titre, texte }, i) => (
            <RevealItem key={titre}>
              <div className="relative h-full">
                <article className="card h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    <Icon className="size-5 text-brand-indigo" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-[14.5px] font-bold text-ink">
                    {titre}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    {texte}
                  </p>
                </article>

                {/* Flèche de liaison, seulement entre deux cartes d'une même ligne */}
                {i < etapes.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-brand-indigo/40 lg:block"
                  >
                    <ArrowRight className="size-5" />
                  </span>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
