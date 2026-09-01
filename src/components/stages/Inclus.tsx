import { Minus } from "lucide-react";
import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { inclus, nonInclus } from "@/data/stages";

export function Inclus() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink">
              Ce qui est compris dans le séjour
            </h2>
            <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2">
              {inclus.map(({ icon, titre, texte }) => (
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
                À prévoir en plus
              </h2>
              <ul className="mt-5 space-y-3">
                {nonInclus.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted"
                  >
                    <Minus className="mt-0.5 size-4 shrink-0 text-muted/60" aria-hidden />
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-surface p-4 text-[11.5px] leading-relaxed text-muted">
                Dates et tarifs de la prochaine saison communiqués sur demande :
                nous vous envoyons le programme détaillé de la destination qui
                vous intéresse.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
