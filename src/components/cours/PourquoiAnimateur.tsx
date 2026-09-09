import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { pourquoiAnimateur } from "@/data/cours-en-ligne";

export function PourquoiAnimateur() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Ce qu'un animateur change"
          subtitle="Nos parcours enregistrés restent disponibles à tout moment. Ces séances apportent autre chose : quelqu'un en face, qui répond maintenant."
        />

        <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pourquoiAnimateur.map(({ icon, titre, texte }) => (
            <RevealItem key={titre}>
              <LiftCard>
                <article className="card h-full p-5">
                  <IconBadge icon={icon} tone="indigo" />
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
  );
}
