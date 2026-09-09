"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { formatsCours } from "@/data/cours-en-ligne";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Même traitement que le hero de la page formations enfants : le visuel se
 * fond dans le navy (le dégradé est gravé dans l'image, pas en CSS) et reçoit
 * en plus le masque latéral `.hero-media` à partir de lg.
 *
 * C'est aussi le même fichier : c'est le seul visuel haute résolution qui
 * montre des enfants devant un écran. Les deux pages partagent donc leur hero
 * tant que le client n'a pas fourni de photo de séance en visio — voir
 * docs/a-valider-client.md.
 */
const IMG = "/images/enfants/hero-enfants-hd.webp";
const ALT =
  "Trois enfants réunis devant un ordinateur portable, entourés d'icônes d'intelligence artificielle";

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
    <section className="relative isolate overflow-hidden bg-navy-950 pt-24 text-white sm:pt-32 lg:min-h-[540px] lg:pb-14">
      <motion.div
        aria-hidden
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="hero-media pointer-events-none absolute bottom-0 right-0 aspect-[2/1] w-[140%] max-w-none sm:w-[105%] lg:w-[62%]"
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
            En visio, avec un animateur
          </motion.p>

          <motion.h1
            {...rise(0.06)}
            className="mt-3 font-display text-[clamp(2.5rem,6.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            Cours
            <br />
            <span className="text-gradient">en ligne</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-4 max-w-md text-[16px] leading-relaxed text-white/70 sm:mt-5 sm:text-[17px]"
          >
            Des séances de 2 heures où votre enfant crée avec l&apos;IA,
            accompagné en temps réel. En petit groupe ou en cours particulier,
            depuis la maison.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-7 sm:mt-8">
            <Button href="/contact" size="lg">
              Demander un créneau
            </Button>
          </motion.div>
        </div>

        <motion.ul
          {...rise(0.36)}
          className="relative mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:max-w-[46%]"
        >
          {formatsCours.map(({ icon: Icon, titre, reperes }) => (
            <li key={titre} className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                <Icon className="size-4 text-brand-cyan" aria-hidden />
              </span>
              <span>
                <span className="block text-[13px] font-semibold">{titre}</span>
                <span className="block text-[11.5px] leading-snug text-white/50">
                  {reperes[0].valeur} · {reperes[1].valeur}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>

        <div aria-hidden className="h-[52vw] sm:h-[44vw] lg:hidden" />
        <span className="sr-only">{ALT}</span>
      </Container>
    </section>
  );
}
