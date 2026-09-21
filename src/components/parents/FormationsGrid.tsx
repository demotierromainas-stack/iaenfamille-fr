"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Clock, GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { IconBadge } from "@/components/IconBadge";
import { formationsParents, type Formation } from "@/data/formations-parents";
import { accentAt, accentClasses } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { Mascotte } from "@/components/Mascotte";

const tris = {
  populaires: { label: "Populaires", fn: (a: Formation, b: Formation) => a.populaire - b.populaire },
  duree: { label: "Durée la plus courte", fn: (a: Formation, b: Formation) => a.minutes - b.minutes },
  alpha: { label: "Ordre alphabétique", fn: (a: Formation, b: Formation) => a.titre.localeCompare(b.titre, "fr") },
} as const;

type TriKey = keyof typeof tris;

export function FormationsGrid() {
  const [tri, setTri] = useState<TriKey>("populaires");
  const reduced = useReducedMotion();

  const formations = useMemo(
    () => [...formationsParents].sort(tris[tri].fn),
    [tri],
  );

  return (
    <section id="formations" className="relative isolate scroll-mt-20 py-12 sm:py-16">
      {/* Lavis de marque, miroir de celui du hero pour ne pas répéter le même
          halo d'une section à l'autre. `-z-10` le garde sous le contenu sans
          élever le Container, qui ferait repasser la mascotte derrière. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 -scale-x-100 voile-couleur"
      />
      <Mascotte
        nom="fusee"
        className="aspect-square -top-16 -right-8 w-40 xl:top-2 xl:left-[max(0rem,calc(50%-43rem))] xl:w-48"
        delai={2}
      />
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[28px]">
            Nos formations <span className="text-gradient">à l&apos;unité</span>
          </h2>

          <label className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] shadow-card transition-colors focus-within:border-brand-violet">
            <span className="text-muted">Trier par :</span>
            <select
              value={tri}
              onChange={(e) => setTri(e.target.value as TriKey)}
              className="cursor-pointer bg-transparent font-semibold text-ink focus:outline-none"
            >
              {Object.entries(tris).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/*
          Une teinte par carte, en boucle sur la palette : filet haut, pastille
          d'icône et bordure de survol la reprennent. Les huit cartes étaient
          auparavant identiques, toutes en indigo.
        */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formations.map((f, i) => {
            const teinte = accentAt(i);
            const accent = accentClasses[teinte];

            return (
              <motion.article
                key={f.slug}
                layout={!reduced}
                initial={reduced ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.06 }}
                className={cn(
                  "card group relative flex flex-col overflow-hidden transition-all hover:shadow-lift",
                  accent.bordure,
                )}
              >
                <span
                  aria-hidden
                  className={cn("absolute inset-x-0 top-0 z-10 h-1", accent.filet)}
                />

                <div className="relative">
                  <Media
                    src={f.image}
                    label={f.titre}
                    tone="warm"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="aspect-[16/9] w-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* pastille d'icône à cheval sur la photo, comme sur la
                      maquette — colorée, cerclée de blanc pour s'en détacher */}
                  <IconBadge
                    icon={f.icon}
                    tone={teinte}
                    className="absolute -bottom-5 left-4 size-10 rounded-full ring-2 ring-white shadow-card"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4 pt-8">
                  <h3 className="font-display text-[15px] font-bold leading-snug text-ink">
                    {f.titre}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    {f.resume}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11.5px] text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-brand-violet" aria-hidden />
                      {f.duree}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap
                        className="size-3.5 text-brand-violet"
                        aria-hidden
                      />
                      {f.niveau}
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="font-display text-xl font-extrabold text-ink">
                      {f.prix} €
                    </span>
                    <Link
                      href={`/formations/${f.slug}`}
                      className="rounded-full bg-brand-violet/10 px-4 py-2 text-[12.5px] font-semibold text-brand-violet transition-colors hover:bg-brand-violet hover:text-white"
                    >
                      Voir la formation
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
