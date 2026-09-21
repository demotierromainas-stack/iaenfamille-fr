"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { heroPoints } from "@/data/home";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG = "/images/home/hero-famille-v5.webp";
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
    <section className="relative isolate overflow-hidden bg-navy-950 pt-24 text-white sm:pt-32 lg:min-h-[560px] lg:pb-14">

      {/*
        Un seul visuel à toutes les tailles. Sous lg il déborde de part et
        d'autre en restant centré : ancré à droite, il ne laissait voir que les
        71 % droits de l'image et coupait la mère du cadrage. À partir de lg il
        se replie sur la moitié droite, et .hero-media en fond le bord gauche.

        Le visuel n'a pas de canal alpha : il se raccorde à la section parce
        que son propre fond est le navy du site (srgb(7,10,32)). Toute nouvelle
        version doit conserver ce fond, sinon le bord haut deviendra franc.
      */}
      <motion.div
        aria-hidden
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="hero-media pointer-events-none absolute bottom-0 left-1/2 aspect-[1.93/1] w-[140%] max-w-none -translate-x-1/2 sm:w-[112%] lg:left-auto lg:right-0 lg:w-[62%] lg:translate-x-0"
      >
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 140vw, 62vw"
          className="object-contain object-right-bottom"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow animate-drift mix-blend-screen"
      />

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
            className="mt-4 max-w-md text-[16px] sm:mt-5 sm:text-[17px] leading-relaxed text-white/70"
          >
            Parents et enfants apprennent, créent et découvrent
            l&apos;intelligence artificielle ensemble, en toute simplicité.
          </motion.p>

          <motion.div {...rise(0.22)} className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
            <Button href="/formations-parents" size="lg">
              Découvrir nos formations
            </Button>
            <Button href="/formations-enfants" variant="outline-light" size="lg">
              Parcours enfants
            </Button>
          </motion.div>
        </div>

        <motion.ul
          {...rise(0.34)}
          className="relative mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-5 lg:mt-12 lg:max-w-[46%]"
        >
          {heroPoints.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                <Icon className="size-4 text-brand-cyan" aria-hidden />
              </span>
              <span>
                <span className="block text-[11.5px] font-semibold leading-tight sm:text-[13px]">
                  {title}
                </span>
                <span className="mt-0.5 hidden text-[11.5px] leading-snug text-white/50 sm:block">
                  {text}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>

        {/* réserve la place du visuel sous le contenu, hors desktop */}
        <div aria-hidden className="h-[54vw] sm:h-[46vw] lg:hidden" />
        <span className="sr-only">{HERO_ALT}</span>
      </Container>
    </section>
  );
}
