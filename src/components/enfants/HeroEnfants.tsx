"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { reassurancesEnfants } from "@/data/parcours-enfants";

const EASE = [0.22, 1, 0.36, 1] as const;
const IMG = "/images/enfants/hero-enfants.webp";
const ALT =
  "Trois enfants réunis devant un ordinateur portable, entourés d'icônes d'intelligence artificielle";

export function HeroEnfants() {
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
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 pb-12 text-white sm:pt-32 sm:pb-14 lg:min-h-[540px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow animate-drift"
      />

      <motion.div
        aria-hidden
        initial={reduced ? undefined : { opacity: 0, scale: 1.04 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="pointer-events-none absolute bottom-0 right-0 hidden aspect-[2/1] w-[62%] lg:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 32%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 94%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 32%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 94%, transparent 100%)",
          WebkitMaskComposite: "source-in",
        }}
      >
        <Image src={IMG} alt="" fill priority sizes="62vw" className="object-contain object-right-bottom" />
      </motion.div>

      <Container className="relative">
        <div className="lg:max-w-[46%]">
          <motion.h1
            {...rise(0)}
            className="font-display text-[clamp(2.5rem,6.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            Formations
            <br />
            <span className="text-gradient">enfants</span>
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-5 max-w-md text-[17px] leading-relaxed text-white/70"
          >
            Vos enfants découvrent, comprennent et créent avec l&apos;IA en
            toute sécurité.
          </motion.p>

          <motion.div {...rise(0.22)} className="mt-8 flex flex-wrap gap-3">
            <Button href="#parcours" size="lg">
              Choisir un parcours
            </Button>
            <Button
              href="/contact"
              variant="outline-light"
              size="lg"
              icon={<MessageCircle className="size-4" aria-hidden />}
            >
              Demander des infos
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-white/10 lg:hidden"
        >
          <Image src={IMG} alt={ALT} fill priority sizes="100vw" className="object-cover" />
        </motion.div>

        <motion.ul
          {...rise(0.34)}
          className="relative mt-10 grid gap-5 sm:grid-cols-3 lg:mt-12 lg:max-w-[46%]"
        >
          {reassurancesEnfants.map(({ icon: Icon, titre, texte }) => (
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
      </Container>
    </section>
  );
}
