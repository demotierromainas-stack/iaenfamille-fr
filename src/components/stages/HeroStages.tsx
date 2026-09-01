"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { principeStage } from "@/data/stages";

const EASE = [0.22, 1, 0.36, 1] as const;
const IMG = "/images/stages/hero-stages-hd.webp";
const ALT = "Villa avec piscine au coucher du soleil, sous les palmiers";

export function HeroStages() {
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
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 text-white sm:pt-32 lg:min-h-[540px] lg:pb-14">

      <motion.div
        aria-hidden
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="hero-media pointer-events-none absolute bottom-0 right-0 aspect-[16/9] w-[140%] max-w-none sm:w-[105%] lg:w-[62%]"
      >
        <Image
          src={IMG}
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
          <motion.p
            {...rise(0)}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan"
          >
            4 jours en famille
          </motion.p>

          <motion.h1
            {...rise(0.06)}
            className="mt-3 font-display text-[clamp(2.5rem,6.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            Stages
            <br />
            <span className="text-gradient">en présentiel</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-5 max-w-md text-[17px] leading-relaxed text-white/70"
          >
            Des expériences immersives pour parents et enfants, dans des lieux
            d&apos;exception. On crée le matin, on profite l&apos;après-midi.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-8 flex flex-wrap gap-3">
            <Button href="#destinations" size="lg">
              Voir les destinations
            </Button>
            <Button
              href="/contact"
              variant="outline-light"
              size="lg"
              icon={<MessageCircle className="size-4" aria-hidden />}
            >
              Demander le programme
            </Button>
          </motion.div>
        </div>

        <motion.ul
          {...rise(0.36)}
          className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:max-w-[46%]"
        >
          {principeStage.slice(0, 2).map(({ icon: Icon, titre, texte }) => (
            <li key={titre} className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                <Icon className="size-4 text-brand-cyan" aria-hidden />
              </span>
              <span>
                <span className="block text-[13px] font-semibold">{titre}</span>
                <span className="block text-[11.5px] leading-snug text-white/50">
                  {texte}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>

        <div aria-hidden className="h-[80vw] sm:h-[60vw] lg:hidden" />
        <span className="sr-only">{ALT}</span>
      </Container>
    </section>
  );
}
