import { Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { formatsCours } from "@/data/cours-en-ligne";
import { cn } from "@/lib/cn";

/** Un ton par format, pour qu'on les distingue au premier coup d'œil. */
const tons = {
  groupe: {
    badge: "indigo",
    pill: "bg-gradient-brand text-white",
    check: "text-brand-blue",
    ring: "ring-1 ring-brand-indigo/25",
  },
  particulier: {
    badge: "violet",
    pill: "bg-brand-violet/10 text-brand-violet",
    check: "text-brand-violet",
    ring: "",
  },
} as const;

export function FormatsCours() {
  return (
    <section id="formats" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Deux formats"
          title="En groupe ou rien qu'à lui"
          subtitle="Le même accompagnement, dans deux cadres différents. Beaucoup de familles commencent en groupe et ajoutent des séances individuelles quand l'enfant accroche."
        />

        <RevealGroup className="mt-9 grid gap-5 lg:grid-cols-2">
          {formatsCours.map((f) => {
            const t = tons[f.slug];
            return (
              <RevealItem key={f.slug}>
                <LiftCard>
                  <article className={cn("card flex h-full flex-col p-6 sm:p-7", t.ring)}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <IconBadge icon={f.icon} tone={t.badge} />
                        <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                          {f.titre}
                        </h3>
                      </div>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em]",
                          t.pill,
                        )}
                      >
                        {f.badge}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {f.accroche}
                    </p>

                    <ul className="mt-6 grid grid-cols-3 gap-2">
                      {f.reperes.map((r) => (
                        <li
                          key={r.label}
                          className="rounded-xl border border-line bg-surface/60 p-3 text-center"
                        >
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                            {r.label}
                          </span>
                          <span className="mt-1 block text-[12.5px] font-bold leading-tight text-ink">
                            {r.valeur}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 space-y-2.5">
                      {f.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-[13px] leading-relaxed text-ink/80"
                        >
                          <Check
                            className={cn("mt-0.5 size-4 shrink-0", t.check)}
                            aria-hidden
                          />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 rounded-xl bg-surface p-4 text-[11.5px] leading-relaxed text-muted">
                      <span className="font-semibold text-ink">Pour qui : </span>
                      {f.pourQui}
                    </p>

                    <div className="mt-6 pt-1">
                      <Button
                        href="/contact"
                        variant={f.slug === "groupe" ? "primary" : "outline"}
                        className="w-full"
                        icon={
                          f.slug === "groupe" ? (
                            "arrow"
                          ) : (
                            <MessageCircle className="size-4" aria-hidden />
                          )
                        }
                      >
                        {f.cta}
                      </Button>
                    </div>
                  </article>
                </LiftCard>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] leading-relaxed text-muted">
          Créneaux et tarifs communiqués sur demande : dites-nous l&apos;âge de
          votre enfant et vos disponibilités, nous revenons vers vous avec ce
          qui colle.
        </p>
      </Container>
    </section>
  );
}
