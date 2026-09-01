import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { principeStage } from "@/data/stages";

export function Principe() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Quatre jours pour créer ensemble"
          subtitle="Le matin on apprend et on crée, l'après-midi appartient aux familles. Le soir, chacun montre ce qu'il a fait."
        />

        <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principeStage.map(({ icon, titre, texte }) => (
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
