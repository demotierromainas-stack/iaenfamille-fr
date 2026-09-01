"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { heroPoints } from "@/data/home";
import { STAGES_HREF } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMG = "/images/home/hero-famille-hd.webp";
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
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 text-white sm:pt-32 lg:min-h-[560px] lg:pb-14">

      {/*
        Un seul visuel à toutes les tailles : ancré en bas à droite, il déborde
        sur mobile pour cadrer sur la partie droite de la photo, et se replie
        sur la moitié droite à partir de lg. Le fondu haut est gravé dans
        l'alpha de l'image, le fondu latéral vient de .hero-media.
      */}
      <motion.div
        aria-hidden
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="hero-media pointer-events-none absolute bottom-0 right-0 aspect-[1.93/1] w-[140%] max-w-none sm:w-[105%] lg:w-[62%]"
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
        </div>

        <motion.ul
          {...rise(0.34)}
          className="relative mt-10 grid gap-5 sm:grid-cols-3 lg:mt-12 lg:max-w-[46%]"
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

        {/* réserve la place du visuel sous le contenu, hors desktop */}
        <div aria-hidden className="h-[76vw] sm:h-[58vw] lg:hidden" />
        <span className="sr-only">{HERO_ALT}</span>
      </Container>
    </section>
  );
}
