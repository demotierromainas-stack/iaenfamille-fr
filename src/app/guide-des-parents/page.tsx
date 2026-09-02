import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { chapitres, reperesAge } from "@/data/guide";

export const metadata: Metadata = {
  title: "Guide des parents",
  description:
    "Cinq repères simples pour accompagner votre enfant dans sa découverte de l'intelligence artificielle.",
};

export default function GuidePage() {
  return (
    <>
      <section className="pt-24 pb-12 sm:pt-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
              Guide des parents
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-tight text-navy-900">
              Cinq repères pour
              <br />
              <span className="text-gradient">bien commencer</span>
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Pas besoin de tout maîtriser pour accompagner votre enfant. Ces
              cinq principes suffisent à poser des bases saines, et ils tiennent
              quel que soit l&apos;outil du moment.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <div className="space-y-5">
            {chapitres.map((c) => (
              <Reveal key={c.numero}>
                <article className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1.4fr_1fr] lg:items-start">
                  <span className="font-display text-4xl font-extrabold text-gradient">
                    {c.numero}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                      {c.titre}
                    </h2>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                      {c.texte}
                    </p>
                  </div>
                  <ul className="space-y-2 rounded-xl bg-surface p-4">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-[12px] leading-snug text-ink/75"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-indigo"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <SectionHeading
            title="Ce qui change selon l'âge"
            subtitle="Le même outil ne s'aborde pas de la même façon à six ans et à quinze."
          />
          <RevealGroup className="mt-9 grid gap-5 md:grid-cols-3">
            {reperesAge.map((r) => (
              <RevealItem key={r.tranche}>
                <article className="card h-full p-6">
                  <h3 className="font-display text-lg font-bold text-brand-indigo">
                    {r.tranche}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">
                    {r.texte}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Envie d&apos;aller plus loin ?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Nos formations reprennent ces principes et les mettent en pratique,
              outil par outil.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/formations-parents" size="lg">
                Voir les formations
              </Button>
              <Button href="/faq" variant="outline" size="lg">
                Questions fréquentes
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
