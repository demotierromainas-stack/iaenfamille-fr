"use client";

import { motion, useReducedMotion } from "motion/react";
import { Brain, ImageIcon, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { heroPoints } from "@/data/home";
import { STAGES_HREF } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Icônes « néon » qui flottent autour du visuel, comme sur la maquette. */
const floaters = [
  { icon: MessageCircle, x: "6%", y: "12%", d: 0 },
  { icon: Brain, x: "76%", y: "8%", d: 0.9 },
  { icon: ImageIcon, x: "82%", y: "58%", d: 1.7 },
  { icon: Sparkles, x: "2%", y: "62%", d: 2.4 },
];

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 pb-14 text-white sm:pt-32 sm:pb-20">
      {/* halos colorés animés */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow animate-drift"
      />
      {/* grille technique discrète */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(70% 60% at 30% 40%, #000, transparent)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div>
            <motion.h1
              {...rise(0)}
              className="font-display text-[clamp(2.75rem,7vw,4.25rem)] font-extrabold leading-[0.95] tracking-tight"
            >
              L&apos;IA à vivre
              <br />
              <span className="text-gradient">en famille</span>
            </motion.h1>

            <motion.p
              {...rise(0.12)}
              className="mt-5 max-w-md text-[17px] leading-relaxed text-white/70"
            >
              Parents et enfants apprennent, créent et découvrent
              l&apos;intelligence artificielle ensemble, en toute simplicité.
            </motion.p>

            <motion.div {...rise(0.22)} className="mt-8 flex flex-wrap gap-3">
              <Button href="/formations-parents" size="lg">
                Découvrir les formations
              </Button>
              <Button href={STAGES_HREF} variant="outline-light" size="lg">
                Voir les stages
              </Button>
            </motion.div>

            <motion.ul
              {...rise(0.34)}
              className="mt-10 grid gap-5 sm:grid-cols-3"
            >
              {heroPoints.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5">
                    <Icon className="size-4 text-brand-cyan" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold">
                      {title}
                    </span>
                    <span className="block text-[11.5px] leading-snug text-white/50">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* visuel */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, scale: 0.96 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="relative"
          >
            <PlaceholderImage
              label="Famille réunie devant un ordinateur portable"
              tone="warm"
              className="aspect-[4/3] w-full rounded-3xl border border-white/10 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]"
            />

            {floaters.map(({ icon: Icon, x, y, d }, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute grid size-11 place-items-center rounded-2xl border border-brand-cyan/40 bg-navy-950/70 text-brand-cyan shadow-[0_0_28px_rgb(34_211_238/0.45)] backdrop-blur-sm"
                style={{ left: x, top: y }}
                animate={reduced ? undefined : { y: [0, -12, 0] }}
                transition={{
                  duration: 4.5,
                  delay: d,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon className="size-5" />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
