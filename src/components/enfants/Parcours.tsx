"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { parcoursEnfants } from "@/data/parcours-enfants";
import { cn } from "@/lib/cn";

const accents = {
  violet: {
    tab: "from-brand-violet to-brand-purple",
    text: "text-brand-violet",
    tint: "bg-brand-violet/5",
  },
  blue: {
    tab: "from-brand-blue to-brand-indigo",
    text: "text-brand-blue",
    tint: "bg-brand-blue/5",
  },
  teal: {
    tab: "from-brand-cyan to-brand-blue",
    text: "text-teal-600",
    tint: "bg-brand-cyan/5",
  },
} as const;

export function Parcours() {
  const [actif, setActif] = useState(parcoursEnfants[0].slug);
  const reduced = useReducedMotion();

  return (
    <section id="parcours" className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        {/* Onglets : sur grand écran les trois colonnes restent visibles,
            les onglets servent alors de repères. En dessous de lg ils
            filtrent réellement le parcours affiché. */}
        <div className="grid gap-3 sm:grid-cols-3">
          {parcoursEnfants.map((p) => {
            const on = p.slug === actif;
            const a = accents[p.accent];
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => setActif(p.slug)}
                aria-pressed={on}
                className={cn(
                  "relative flex items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3 text-left transition-colors",
                  on
                    ? "border-transparent text-white"
                    : "border-line bg-white text-ink hover:border-brand-indigo/30",
                )}
              >
                {on && (
                  <motion.span
                    layoutId={reduced ? undefined : "onglet-actif"}
                    className={cn(
                      "absolute inset-0 -z-10 bg-gradient-to-r",
                      a.tab,
                    )}
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  />
                )}
                <span className="flex-1">
                  <span className="block font-display text-lg font-bold">
                    {p.tranche}
                  </span>
                  <span
                    className={cn(
                      "block text-[12px]",
                      on ? "text-white/80" : "text-muted",
                    )}
                  >
                    {p.accroche}
                  </span>
                </span>
                <Image
                  src={p.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="size-12 shrink-0 rounded-xl object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Colonnes de parcours */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {parcoursEnfants.map((p) => {
            const a = accents[p.accent];
            const on = p.slug === actif;
            return (
              <article
                key={p.slug}
                className={cn(
                  "card p-5",
                  // sous lg, seule la tranche sélectionnée est affichée
                  on ? "block" : "hidden lg:block",
                )}
              >
                <h2 className={cn("font-display text-xl font-bold", a.text)}>
                  {p.tranche}
                </h2>
                <p className={cn("mt-0.5 text-[13px]", a.text)}>{p.accroche}</p>

                <ul className="mt-5 space-y-3">
                  {p.ateliers.map((at, i) => (
                    <motion.li
                      key={at.titre}
                      initial={reduced ? undefined : { opacity: 0, y: 14 }}
                      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: i * 0.07 }}
                      className={cn(
                        "flex items-start gap-3 rounded-xl p-3 transition-colors",
                        a.tint,
                      )}
                    >
                      <Media
                        src={at.image}
                        label=""
                        tone="kids"
                        sizes="56px"
                        className="size-12 shrink-0 rounded-lg"
                      />
                      <div>
                        <h3 className={cn("text-[13.5px] font-semibold", a.text)}>
                          {at.titre}
                        </h3>
                        <p className="mt-1 text-[12px] leading-snug text-muted">
                          {at.texte}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href={`/formations-enfants/${p.slug}`}
                  className={cn(
                    "group mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold",
                    a.text,
                  )}
                >
                  Voir tous les ateliers {p.tranche}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
