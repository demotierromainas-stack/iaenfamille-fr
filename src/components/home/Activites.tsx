import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
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
          {activites.map(({ icon: Icon, title, text, tone }) => (
            <RevealItem key={title}>
              <LiftCard>
                <article className="card group h-full p-3 text-center">
                  <PlaceholderImage
                    label={title}
                    tone={tone}
                    showLabel={false}
                    className="mb-3 grid aspect-[4/3] w-full place-items-center rounded-xl"
                  >
                    <Icon
                      className="size-8 text-white drop-shadow-[0_2px_10px_rgb(0_0_0/0.4)] transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    />
                  </PlaceholderImage>
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
