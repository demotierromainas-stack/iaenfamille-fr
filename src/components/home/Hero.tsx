"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { heroPoints } from "@/data/home";
import { STAGES_HREF } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG = "/images/home/hero-famille.webp";
const HERO_ALT =
  "Une famille réunie devant un ordinateur portable, entourée d'icônes d'intelligence artificielle";

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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow animate-drift"
      />

      {/* Visuel de droite : il déborde jusqu'au bord et se fond dans le fond
          sombre, comme sur la maquette. Masqué en dessous de lg, où il repasse
          en bloc sous le texte. */}
      <motion.div
        aria-hidden
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 26%), linear-gradient(to bottom, #000 82%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 26%), linear-gradient(to bottom, #000 82%, transparent 100%)",
          WebkitMaskComposite: "source-in",
        }}
      >
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="62vw"
          className="object-cover object-left"
        />
      </motion.div>

      <Container className="relative">
        <div className="lg:max-w-[46%]">
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
            Parents et enfants apprennent, créent et découvrent l&apos;intelligence
            artificielle ensemble, en toute simplicité.
          </motion.p>

          <motion.div {...rise(0.22)} className="mt-8 flex flex-wrap gap-3">
            <Button href="/formations-parents" size="lg">
              Découvrir les formations
            </Button>
            <Button href={STAGES_HREF} variant="outline-light" size="lg">
              Voir les stages
            </Button>
          </motion.div>
        </div>

        {/* visuel en version mobile / tablette */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 lg:hidden"
        >
          <Image
            src={HERO_IMG}
            alt={HERO_ALT}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.ul
          {...rise(0.34)}
          className="relative mt-10 grid gap-5 sm:grid-cols-3 lg:mt-14 lg:max-w-[46%]"
        >
          {heroPoints.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                <Icon className="size-4 text-brand-cyan" aria-hidden />
              </span>
              <span>
                <span className="block text-[13px] font-semibold">{title}</span>
                <span className="block text-[11.5px] leading-snug text-white/50">
                  {text}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
