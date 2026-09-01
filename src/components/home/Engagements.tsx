import { Lock } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { engagements } from "@/data/home";

export function Engagements() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-10 text-white sm:px-10 sm:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hero-glow animate-drift"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.6fr_auto] lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[28px]">
                  Simplicité. Sécurité. Apprentissage ensemble.
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Notre engagement pour que toute la famille avance sereinement.
                </p>

                <RevealGroup
                  className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                  stagger={0.08}
                >
                  {engagements.map(({ icon: Icon, title, text }) => (
                    <RevealItem key={title}>
                      <div className="flex gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5">
                          <Icon className="size-4 text-brand-cyan" aria-hidden />
                        </span>
                        <div>
                          <h3 className="text-[13px] font-semibold">{title}</h3>
                          <p className="mt-1 text-[11.5px] leading-snug text-white/50">
                            {text}
                          </p>
                        </div>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>

              {/* cadenas néon de la maquette */}
              <div
                aria-hidden
                className="relative hidden size-44 shrink-0 place-items-center lg:grid"
              >
                <span className="absolute inset-0 rounded-full bg-brand-indigo/25 blur-2xl" />
                <span className="relative grid size-28 place-items-center rounded-3xl border border-brand-cyan/40 bg-navy-900/80 shadow-[0_0_50px_rgb(34_211_238/0.35)]">
                  <Lock className="size-12 text-brand-cyan" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
