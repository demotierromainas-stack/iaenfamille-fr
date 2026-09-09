import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { coursEnLigne } from "@/data/home";
import { formatsCours } from "@/data/cours-en-ligne";
import { COURS_HREF } from "@/lib/site";

/**
 * Quatrième offre du site, présentée en bandeau plutôt qu'en quatrième carte :
 * les trois cartes gardent la mise en page de la maquette, et le fond sombre
 * distingue ces séances animées des contenus enregistrés.
 */
export function CoursEnLigne() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hero-glow animate-drift"
            />

            <div className="relative grid gap-9 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-center lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">
                  {coursEnLigne.eyebrow}
                </p>

                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-[28px]">
                  {coursEnLigne.titre}
                </h2>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
                  {coursEnLigne.texte}
                </p>

                <div className="mt-7">
                  <Button href={COURS_HREF} size="lg">
                    {coursEnLigne.cta}
                  </Button>
                </div>
              </div>

              <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:gap-4">
                {formatsCours.map(({ slug, icon: Icon, titre, reperes }) => (
                  <RevealItem key={slug}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                      <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5">
                        <Icon className="size-4 text-brand-cyan" aria-hidden />
                      </span>
                      <h3 className="mt-3 font-display text-[14px] font-bold">
                        {titre}
                      </h3>
                      <dl className="mt-3 space-y-1.5">
                        {reperes.map((r) => (
                          <div
                            key={r.label}
                            className="flex items-baseline justify-between gap-3 border-t border-white/10 pt-1.5 text-[11.5px] first:border-0 first:pt-0"
                          >
                            <dt className="text-white/45">{r.label}</dt>
                            <dd className="text-right font-semibold text-white/85">
                              {r.valeur}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
