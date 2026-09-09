import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { derouleSeance } from "@/data/cours-en-ligne";

export function DerouleSeance() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Comment se passe une séance"
          subtitle="Toujours le même déroulé, pour que l'enfant sache où il va — et qu'il finisse toujours par montrer ce qu'il a fait."
        />

        <RevealGroup className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* fil de la frise, uniquement sur grand écran */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[18px] hidden h-px bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple lg:block"
          />

          {derouleSeance.map(({ repere, titre, texte }, i) => (
            <RevealItem key={titre}>
              <div className="relative">
                <span
                  aria-hidden
                  className="relative z-10 grid size-9 place-items-center rounded-full border-4 border-surface bg-gradient-brand text-[12px] font-bold text-white"
                >
                  {i + 1}
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-indigo">
                  {repere}
                </p>
                <h3 className="mt-1 font-display text-[15px] font-bold text-ink">
                  {titre}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  {texte}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
