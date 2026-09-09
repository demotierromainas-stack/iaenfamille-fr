import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { ctaCours } from "@/data/cours-en-ligne";

export function CtaCours() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hero-glow animate-drift"
            />

            <div className="relative grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
              <div className="relative hidden lg:block">
                <p className="mb-2 text-center font-display text-[12.5px] font-semibold italic text-brand-cyan/80">
                  {ctaCours.manuscrit}
                </p>
                <Media
                  src="/images/cours/cta-cours.webp"
                  label="Enfant souriant avec un casque devant son ordinateur"
                  tone="kids"
                  sizes="216px"
                  className="media-fondu aspect-[216/126] w-56"
                />
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[28px]">
                  {ctaCours.titre}
                </h2>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
                  {ctaCours.texte}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_-8px_rgb(99_102_241/0.7)] transition-all duration-200 hover:brightness-110"
                >
                  {ctaCours.bouton}
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[11.5px] text-white/50">
                  <CalendarDays className="size-3.5" aria-hidden />
                  {ctaCours.note}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
