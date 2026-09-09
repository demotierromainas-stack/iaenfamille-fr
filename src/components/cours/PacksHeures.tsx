import { Gift } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { packsHeures } from "@/data/cours-en-ligne";

export function PacksHeures() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <div className="grid gap-6 rounded-3xl bg-brand-indigo/[0.06] p-6 ring-1 ring-brand-indigo/12 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white shadow-card">
                <Gift className="size-6 text-brand-indigo" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold leading-snug tracking-tight text-ink">
                  {packsHeures.titre}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {packsHeures.texte}
                </p>
              </div>
            </div>

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {packsHeures.packs.map((p) => (
                <RevealItem key={p.titre}>
                  <div className="card flex h-full items-center justify-between gap-4 p-5">
                    <div>
                      <h3 className="text-[13px] font-semibold text-ink">
                        {p.titre}
                      </h3>
                      <p className="mt-2 flex items-baseline gap-2">
                        <span className="text-[15px] text-muted line-through">
                          {p.prixInitial} €
                        </span>
                        <span className="font-display text-2xl font-extrabold text-brand-indigo">
                          {p.prix} €
                        </span>
                      </p>
                      <p className="mt-1 text-[11.5px] text-muted">{p.detail}</p>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-brand text-[12.5px] font-bold text-white">
                      −{p.remise} %
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
