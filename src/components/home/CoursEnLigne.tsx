import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Media } from "@/components/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { coursEnLigne } from "@/data/home";
import { COURS_HREF } from "@/lib/site";

/**
 * Bandeau de bas de page, après les destinations. Il reprend la carte d'offre
 * du haut en développant les quatre atouts, comme sur la maquette client.
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

            <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[28px]">
                  <span className="text-gradient">Des cours en ligne</span>, où
                  que vous soyez !
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  {coursEnLigne.texte}
                </p>

                <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {coursEnLigne.atouts.map(({ icon: Icon, titre, texte }) => (
                    <RevealItem key={titre}>
                      <div className="flex items-start gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                          <Icon className="size-4 text-brand-cyan" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-[12.5px] font-semibold leading-tight">
                            {titre}
                          </span>
                          <span className="mt-0.5 block text-[11px] leading-snug text-white/50">
                            {texte}
                          </span>
                        </span>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>

                <div className="mt-8">
                  <Button href={COURS_HREF} size="lg">
                    {coursEnLigne.cta}
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <p className="mb-2 text-center font-display text-[12.5px] font-semibold italic text-brand-cyan/80">
                  {coursEnLigne.manuscrit}
                </p>
                {/* Le cadre reprend le ratio exact du fichier (194×172) pour
                    qu'object-cover n'ait rien à rogner. Visuel découpé dans la
                    maquette, donc en basse définition — à remplacer par une
                    version upscalée, voir docs/a-upscaler/README.md. */}
                <Media
                  src="/images/home/cours-enfant-casque.webp"
                  label="Enfant avec un casque qui salue devant son ordinateur"
                  tone="kids"
                  sizes="224px"
                  className="media-fondu aspect-[97/86] w-64"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
