"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Clock, GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { formationsParents, type Formation } from "@/data/formations-parents";

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
    <section className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[28px]">
            Nos formations à l&apos;unité
          </h2>

          <label className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] shadow-card">
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {formations.map((f, i) => (
            <motion.article
              key={f.slug}
              layout={!reduced}
              initial={reduced ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.06 }}
              className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-lift"
            >
              <div className="relative">
                <Media
                  src={f.image}
                  label={f.titre}
                  tone="warm"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="aspect-[16/9] w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                {/* pastille d'icône à cheval sur la photo, comme sur la maquette */}
                <span className="absolute -bottom-5 left-4 grid size-10 place-items-center rounded-full bg-white shadow-card">
                  <f.icon className="size-5 text-brand-indigo" aria-hidden />
                </span>
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
                    <Clock className="size-3.5" aria-hidden />
                    {f.duree}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="size-3.5" aria-hidden />
                    {f.niveau}
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="font-display text-xl font-extrabold text-ink">
                    {f.prix} €
                  </span>
                  <Link
                    href={`/formations/${f.slug}`}
                    className="rounded-full bg-brand-indigo/10 px-4 py-2 text-[12.5px] font-semibold text-brand-indigo transition-colors hover:bg-brand-indigo hover:text-white"
                  >
                    Voir la formation
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
