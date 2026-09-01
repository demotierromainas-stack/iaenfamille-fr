"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

/**
 * Accordéon de questions/réponses. Une seule ouverte à la fois, et les
 * réponses restent dans le DOM en `hidden` plutôt que démontées, pour
 * qu'elles soient indexables et trouvables par la recherche du navigateur.
 */
export function Accordion({
  items,
}: {
  items: { question: string; reponse: string }[];
}) {
  const [ouvert, setOuvert] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const id = useId();

  return (
    <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const on = ouvert === i;
        return (
          <li key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOuvert(on ? null : i)}
                aria-expanded={on}
                aria-controls={`${id}-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface/60"
              >
                <span className="text-[14px] font-semibold text-ink">
                  {item.question}
                </span>
                <motion.span
                  animate={reduced ? undefined : { rotate: on ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-brand-indigo"
                >
                  <ChevronDown className="size-4" aria-hidden />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  id={`${id}-${i}`}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-muted">
                    {item.reponse}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
