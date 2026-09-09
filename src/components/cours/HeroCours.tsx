"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/Container";
import { reassurancesCours } from "@/data/cours-en-ligne";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Le fondu vers le navy est porté par l'image elle-même, complété par le
 * masque latéral `.hero-media` à partir de lg.
 *
 * Visuel fourni par le client (1760×893). Il arrivait à bords francs : le
 * fondu vers le navy #060a1f a été gravé dedans, comme pour les autres heros,
 * afin qu'il ne se lise pas comme un rectangle posé sur la section sombre.
 * Source d'origine dans docs/a-upscaler/hero-section-coursenligne.png.
 */
const IMG = "/images/cours/hero-cours-v2.webp";
const ALT =
  "Une formatrice et un enfant souriants devant un ordinateur portable, pendant un cours en visio";

/** Les cinq verbes de la maquette, posés en chapelet sous l'accroche. */
const VERBES = ["Comprendre", "Créer", "Imaginer", "Progresser", "Ensemble"];

export function HeroCours() {
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
    <section className="relative isolate overflow-hidden bg-navy-950 pt-24 text-white sm:pt-28">
      <motion.div
        aria-hidden
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="hero-media pointer-events-none absolute right-0 top-0 aspect-[2/1] w-[140%] max-w-none sm:w-[105%] lg:w-[60%]"
      >
        <Image
          src={IMG}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 140vw, 60vw"
          className="object-contain object-right-top"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow animate-drift mix-blend-screen"
      />

      <Container className="relative">
        {/* Fil d'Ariane, repris de la maquette */}
        <motion.nav
          {...rise(0)}
          aria-label="Fil d'Ariane"
          className="flex items-center gap-1.5 text-[12.5px] text-white/50"
        >
          <Link href="/" className="transition-colors hover:text-white/80">
            Accueil
          </Link>
          <ChevronRight className="size-3.5" aria-hidden />
          <span className="text-white/80">Cours en ligne</span>
        </motion.nav>

        <div className="lg:max-w-[48%]">
          <motion.h1
            {...rise(0.06)}
            className="mt-5 font-display text-[clamp(2.25rem,5.6vw,3.5rem)] font-extrabold leading-[1.02] tracking-tight"
          >
            Cours en ligne
            <br />
            <span className="text-gradient">avec des experts</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-4 max-w-md text-[16px] leading-relaxed text-white/70 sm:text-[17px]"
          >
            Un accompagnement personnalisé pour apprendre et progresser à son
            rythme, en toute confiance.
          </motion.p>

          <motion.ul {...rise(0.24)} className="mt-6 flex flex-wrap gap-2">
            {VERBES.map((v) => (
              <li
                key={v}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium text-white/75 backdrop-blur-sm"
              >
                {v}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.ul
          {...rise(0.34)}
          className="relative mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5"
        >
          {reassurancesCours.map(({ icon: Icon, titre, texte }) => (
            <li key={titre} className="flex items-start gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                <Icon className="size-4 text-brand-cyan" aria-hidden />
              </span>
              <span>
                <span className="block text-[12.5px] font-semibold leading-tight">
                  {titre}
                </span>
                <span className="mt-0.5 block text-[11px] leading-snug text-white/50">
                  {texte}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>

        <div aria-hidden className="h-[46vw] pb-8 sm:h-[34vw] lg:hidden" />
        <div aria-hidden className="hidden pb-14 lg:block" />
        <span className="sr-only">{ALT}</span>
      </Container>
    </section>
  );
}
