import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { formules } from "@/data/cours-en-ligne";
import { cn } from "@/lib/cn";
import { Mascotte } from "@/components/Mascotte";

/** Un ton par formule, comme sur la maquette : bleu à gauche, violet à droite. */
const tons = {
  individuel: {
    badge: "cyan",
    fond: "bg-brand-blue/[0.04] ring-1 ring-brand-blue/12",
    check: "text-brand-blue",
    prix: "text-brand-blue",
    bouton: "bg-gradient-to-r from-brand-blue to-brand-cyan",
    manuscrit: "text-brand-blue/70",
    media: "brand",
  },
  groupe: {
    badge: "violet",
    fond: "bg-brand-violet/[0.05] ring-1 ring-brand-violet/12",
    check: "text-brand-violet",
    prix: "text-brand-violet",
    bouton: "bg-gradient-to-r from-brand-violet to-brand-purple",
    manuscrit: "text-brand-violet/70",
    media: "kids",
  },
} as const;

export function FormulesCours() {
  return (
    <section id="formules" className="relative isolate scroll-mt-24 py-14 sm:py-20">
      <Mascotte
        nom="developpeur"
        className="aspect-square -top-28 -right-4 w-40 xl:top-6 xl:right-[max(0rem,calc(50%-41rem))] xl:w-52"
        delai={1}
      />
      <Container>
        <SectionHeading
          title="Deux formules pour s'adapter à vos besoins"
          subtitle="Que vous préfériez un accompagnement personnalisé ou l'énergie d'un petit groupe, nos cours en ligne s'adaptent à toute la famille."
        />

        <RevealGroup className="mt-9 grid gap-5 lg:grid-cols-2">
          {formules.map((f) => {
            const t = tons[f.slug];
            return (
              <RevealItem key={f.slug}>
                <LiftCard>
                  <article
                    className={cn(
                      "flex h-full flex-col rounded-card p-6 sm:p-7",
                      t.fond,
                    )}
                  >
                    <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                      <div>
                        <div className="flex items-center gap-3">
                          <IconBadge icon={f.icon} tone={t.badge} />
                          <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                            {f.titre}
                          </h3>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-muted">
                          {f.accroche}
                        </p>

                        <ul className="mt-5 space-y-2.5">
                          {f.points.map((p) => (
                            <li
                              key={p}
                              className="flex items-start gap-2 text-[13px] leading-relaxed text-ink/80"
                            >
                              <CircleCheck
                                className={cn("mt-0.5 size-4 shrink-0", t.check)}
                                aria-hidden
                              />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visuel de la carte, avec la mention manuscrite de la maquette */}
                      <div className="relative w-full sm:w-[168px]">
                        <p
                          className={cn(
                            "mb-2 text-center font-display text-[12.5px] font-semibold italic leading-snug",
                            t.manuscrit,
                          )}
                        >
                          {f.manuscrit}
                        </p>
                        <Media
                          src={f.image.src}
                          label={f.image.label}
                          tone={t.media}
                          sizes="(max-width: 640px) 100vw, 168px"
                          className="aspect-square w-full rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="flex items-baseline gap-2">
                        <span
                          className={cn(
                            "font-display text-4xl font-extrabold",
                            t.prix,
                          )}
                        >
                          {f.prix} €
                        </span>
                        <span className="text-[13px] font-medium text-muted">
                          {f.unite}
                        </span>
                      </p>
                      {f.note && (
                        <p className="mt-1 text-[11.5px] text-muted">{f.note}</p>
                      )}

                      {/* Bouton écrit à la main plutôt que via <Button> : la
                          maquette veut un dégradé propre à chaque formule, et
                          il entrerait en conflit avec celui du variant. */}
                      <Link
                        href="/contact"
                        className={cn(
                          "group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:brightness-110",
                          t.bouton,
                        )}
                      >
                        {f.cta}
                        <ArrowRight
                          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </article>
                </LiftCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
