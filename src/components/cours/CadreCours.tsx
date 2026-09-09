import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { cadreCours, materiel } from "@/data/cours-en-ligne";

/** Deux colonnes : le cadre qu'on pose, et ce que la famille doit prévoir. */
export function CadreCours() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink">
              Le cadre autour de la séance
            </h2>
            <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2">
              {cadreCours.map(({ icon, titre, texte }) => (
                <RevealItem key={titre}>
                  <div className="flex items-start gap-3">
                    <IconBadge icon={icon} tone="light" />
                    <div>
                      <h3 className="text-[13px] font-semibold text-ink">
                        {titre}
                      </h3>
                      <p className="mt-1 text-[11.5px] leading-snug text-muted">
                        {texte}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.08}>
            <div className="card h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                Ce qu&apos;il faut à la maison
              </h2>
              <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2">
                {materiel.map(({ icon, titre, texte }) => (
                  <RevealItem key={titre}>
                    <div className="flex items-start gap-3">
                      <IconBadge icon={icon} tone="light" />
                      <div>
                        <h3 className="text-[13px] font-semibold text-ink">
                          {titre}
                        </h3>
                        <p className="mt-1 text-[11.5px] leading-snug text-muted">
                          {texte}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
