import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { Media } from "@/components/Media";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { offers } from "@/data/home";

const linkTone = {
  indigo: "text-brand-blue",
  violet: "text-brand-violet",
  cyan: "text-brand-cyan",
  orange: "text-brand-orange",
} as const;

/**
 * Les quatre offres du site, sur une ligne à partir de lg — c'est la
 * disposition de la maquette client depuis l'ajout des cours en ligne.
 *
 * Deux mises en page de carte : celle des formations enfants montre les trois
 * tranches d'âge en vignettes, les autres portent une photo incrustée en
 * diagonale sur leur bord droit.
 */
export function Offers() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => {
            const avecPhoto = !offer.ages;

            return (
              <RevealItem key={offer.title}>
                <LiftCard>
                  <article className="card relative flex h-full flex-col overflow-hidden">
                    {/* Les photos de carte sont des portraits étroits
                        (~372×784). Le cadre doit rester plus haut que large,
                        sinon `object-cover` remplit la largeur et rogne les
                        visages par le haut. */}
                    {avecPhoto && (
                      <Media
                        src={offer.image.src}
                        label={offer.image.label}
                        tone={offer.image.tone}
                        sizes="(max-width: 640px) 40vw, 15vw"
                        position="top"
                        className="clip-diagonal absolute inset-y-0 right-0 w-[34%] lg:inset-y-auto lg:bottom-0 lg:h-[46%] lg:w-[36%]"
                      />
                    )}

                    <div className="relative flex flex-1 flex-col p-5">
                      <div className={avecPhoto ? "pr-[30%] lg:pr-0" : ""}>
                        <IconBadge icon={offer.icon} tone={offer.tone} />
                        <h2 className="mt-3 font-display text-[17px] font-bold leading-tight tracking-tight">
                          {offer.title}
                        </h2>
                      </div>

                      <p
                        className={`mt-3 text-[13px] leading-relaxed text-muted ${
                          avecPhoto ? "pr-[36%] lg:pr-0" : ""
                        }`}
                      >
                        {offer.text}
                      </p>

                      {offer.bullets.length > 0 && (
                        <ul
                          className={`mt-4 space-y-2 ${avecPhoto ? "pr-[34%] lg:pr-[38%]" : ""}`}
                        >
                          {offer.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-[12.5px] leading-snug text-ink/80"
                            >
                              <Check
                                className={`mt-0.5 size-3.5 shrink-0 ${linkTone[offer.tone]}`}
                                aria-hidden
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}

                      {offer.ages && (
                        <ul className="mt-4 grid grid-cols-3 gap-2">
                          {offer.ages.map((a) => (
                            <li
                              key={a.range}
                              className="rounded-xl border border-line bg-surface/60 p-2 text-center"
                            >
                              <Media
                                src={a.src}
                                label={a.label}
                                tone="kids"
                                sizes="80px"
                                className="mx-auto mb-2 aspect-square w-full rounded-lg"
                              />
                              <span className="block text-[11.5px] font-bold text-ink">
                                {a.range}
                              </span>
                              <span className="mt-0.5 block text-[9.5px] leading-tight text-muted">
                                {a.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div
                        className={`mt-auto pt-5 ${avecPhoto ? "lg:pr-[38%]" : ""}`}
                      >
                        <Link
                          href={offer.href}
                          className={`group inline-flex w-fit items-center gap-1.5 text-[12.5px] font-semibold leading-snug ${linkTone[offer.tone]}`}
                        >
                          {offer.cta}
                          <ArrowRight
                            className="size-3.5 shrink-0 transition-transform group-hover:translate-x-1"
                            aria-hidden
                          />
                        </Link>
                      </div>
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
