import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { competences } from "@/data/parcours-enfants";
import { Mascotte } from "@/components/Mascotte";

export function Competences() {
  return (
    <section className="relative isolate pb-12 sm:pb-16">
      <Mascotte
        nom="planete"
        className="aspect-[4/3] -top-12 -left-4 w-32 xl:-top-8 xl:left-[max(0rem,calc(50%-38rem))] xl:w-32"
        boucle={600}
        delai={4}
      />
      <Container>
        <div className="card px-6 py-9 sm:px-10">
          <SectionHeading title="Les compétences développées" />

          <RevealGroup
            className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-5"
            stagger={0.07}
          >
            {competences.map(({ titre, texte, image }) => (
              <RevealItem key={titre}>
                <div className="flex items-start gap-3">
                  <Media
                    src={image}
                    label=""
                    tone="kids"
                    sizes="56px"
                    className="size-12 shrink-0 rounded-full"
                  />
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
  );
}
