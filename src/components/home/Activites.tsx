import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { activites } from "@/data/home";

export function Activites() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Des activités pour créer, comprendre et s'amuser"
          subtitle="L'IA devient un terrain de jeu créatif pour toute la famille."
        />

        <RevealGroup
          className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
          stagger={0.07}
        >
          {activites.map(({ title, text, tone, src }) => (
            <RevealItem key={title}>
              <LiftCard>
                <article className="card group h-full p-3 text-center">
                  <Media
                    src={src}
                    label={title}
                    tone={tone}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 190px"
                    className="mb-3 aspect-[4/3] w-full rounded-xl"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <h3 className="font-display text-[13.5px] font-bold leading-tight">
                    {title}
                  </h3>
                  <p className="mt-1.5 px-1 pb-2 text-[11.5px] leading-snug text-muted">
                    {text}
                  </p>
                </article>
              </LiftCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
