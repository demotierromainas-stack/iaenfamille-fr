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
  orange: "text-brand-orange",
} as const;

export function Offers() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <RevealGroup className="grid gap-5 md:grid-cols-3">
          {offers.map((offer) => {
            const isStages = offer.tone === "orange";
            const hasSideImage = !offer.ages;

            return (
              <RevealItem key={offer.title}>
                <LiftCard>
                  <article className="card relative h-full overflow-hidden">
                    {/* photo en incrustation diagonale (cartes parents et stages) */}
                    {hasSideImage && (
                      <Media
                        src={offer.image.src}
                        label={offer.image.label}
                        tone={offer.image.tone}
                        sizes="(max-width: 768px) 50vw, 20vw"
                        position={isStages ? "center" : "bottom"}
                        className={
                          isStages
                            ? "clip-diagonal absolute inset-y-0 right-0 w-[38%]"
                            : "clip-diagonal absolute bottom-0 right-0 h-[44%] w-[46%]"
                        }
                      />
                    )}

                    <div
                      className={`relative flex h-full flex-col p-6 ${
                        hasSideImage ? "pr-6" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 ${isStages ? "pr-[22%]" : ""}`}
                      >
                        <IconBadge icon={offer.icon} tone={offer.tone} />
                        <h2 className="font-display text-lg font-bold tracking-tight">
                          {offer.title}
                        </h2>
                      </div>

                      <p
                        className={`mt-4 text-sm leading-relaxed text-muted ${
                          isStages ? "pr-[32%]" : ""
                        }`}
                      >
                        {offer.text}
                      </p>

                      {offer.bullets.length > 0 && (
                        <ul className={`mt-5 space-y-2.5 ${isStages ? "pr-[32%]" : ""}`}>
                          {offer.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-[13px] text-ink/80"
                            >
                              <Check
                                className={`mt-0.5 size-4 shrink-0 ${linkTone[offer.tone]}`}
                                aria-hidden
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}

                      {offer.ages && (
                        <ul className="mt-5 grid grid-cols-3 gap-2">
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
                              <span className="block text-[12px] font-bold text-ink">
                                {a.range}
                              </span>
                              <span className="mt-0.5 block text-[10px] leading-tight text-muted">
                                {a.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link
                        href={offer.href}
                        className={`group mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-[13px] font-semibold ${linkTone[offer.tone]}`}
                      >
                        {offer.cta}
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
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
