import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { journeeType } from "@/data/stages";

export function JourneeType() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="À quoi ressemble une journée"
          subtitle="Le même rythme chaque jour, pour que petits et grands trouvent leurs repères."
        />

        <RevealGroup className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* fil de la frise, uniquement sur grand écran */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[18px] hidden h-px bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple lg:block"
          />

          {journeeType.map(({ heure, titre, texte }) => (
            <RevealItem key={heure}>
              <div className="relative">
                <span
                  aria-hidden
                  className="relative z-10 grid size-9 place-items-center rounded-full border-4 border-surface bg-gradient-brand text-[10.5px] font-bold text-white"
                >
                  {heure.split(" ")[0]}
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-indigo">
                  {heure}
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
