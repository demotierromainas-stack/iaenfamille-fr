import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { parAge } from "@/data/cours-en-ligne";
import { parcoursEnfants } from "@/data/parcours-enfants";

/**
 * Mêmes tranches d'âge que les parcours enregistrés : on relit
 * `parcoursEnfants` plutôt que de redéclarer les libellés et les avatars.
 */
export function ParAge() {
  const tranches = parAge.flatMap((a) => {
    const p = parcoursEnfants.find((x) => x.slug === a.slug);
    return p ? [{ ...a, tranche: p.tranche, avatar: p.avatar }] : [];
  });

  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Des groupes par tranche d'âge"
          subtitle="Un enfant de 6 ans et un ado de 15 ans ne font pas la même séance. Les groupes suivent les mêmes tranches que nos parcours."
        />

        <RevealGroup className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tranches.map(({ slug, tranche, titre, texte, avatar }) => (
            <RevealItem key={slug}>
              <LiftCard>
                <article className="card flex h-full flex-col p-5">
                  <div className="flex items-center gap-3">
                    <Media
                      src={avatar}
                      label={`Enfant de ${tranche}`}
                      tone="kids"
                      sizes="56px"
                      className="size-14 shrink-0 rounded-xl"
                    />
                    <div>
                      <span className="block font-display text-[15px] font-bold text-ink">
                        {tranche}
                      </span>
                      <span className="block text-[12px] text-brand-indigo">
                        {titre}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-[12.5px] leading-relaxed text-muted">
                    {texte}
                  </p>

                  <Link
                    href={`/formations-enfants/${slug}`}
                    className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-[12.5px] font-semibold text-brand-blue"
                  >
                    Voir le parcours {tranche}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </article>
              </LiftCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
