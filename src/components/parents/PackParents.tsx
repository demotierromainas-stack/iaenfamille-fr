import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { garantiesParents, packParents } from "@/data/formations-parents";

export function PackParents() {
  const economie = packParents.prixInitial - packParents.prix;

  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple px-6 py-8 text-white sm:px-10 sm:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(45% 70% at 82% 40%, rgb(255 255 255 / 0.28), transparent 70%)",
              }}
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr_auto] lg:items-center">
              <div>
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] backdrop-blur">
                  {packParents.badge}
                </span>
                <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {packParents.titre}
                </h2>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
                  {packParents.texte}
                </p>
              </div>

              <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {packParents.avantages.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-[13px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-white/90" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
                <p className="flex items-baseline justify-center gap-2">
                  <span className="text-lg text-white/60 line-through">
                    {packParents.prixInitial} €
                  </span>
                  <span className="font-display text-4xl font-extrabold">
                    {packParents.prix} €
                  </span>
                </p>
                <p className="mt-1 text-[11.5px] text-white/75">
                  Économisez {economie} €
                </p>
                <a
                  href="/mon-compte"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-indigo transition-transform hover:scale-[1.02]"
                >
                  {packParents.cta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {garantiesParents.map(({ icon, titre, texte }) => (
            <RevealItem key={titre}>
              <div className="flex items-start gap-3">
                <IconBadge icon={icon} tone="light" />
                <div>
                  <h3 className="text-[13px] font-semibold text-ink">{titre}</h3>
                  <p className="mt-1 text-[11.5px] leading-snug text-muted">
                    {texte}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
