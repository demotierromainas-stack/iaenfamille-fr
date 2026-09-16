import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { IconBadge } from "@/components/IconBadge";
import { Mascotte } from "@/components/Mascotte";

/**
 * Page dont le contenu n'existe pas encore et ne peut pas être inventé
 * (articles de blog, témoignages de vraies familles). On l'assume plutôt
 * que de remplir avec du faux.
 */
export function EtatVide({
  eyebrow,
  titre,
  intro,
  icon,
  message,
  cta,
}: {
  eyebrow: string;
  titre: string;
  intro: string;
  icon: LucideIcon;
  message: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="relative isolate pt-24 pb-16 sm:pt-28 sm:pb-24">
      <Mascotte
        nom="tasse"
        className="aspect-square top-10 -right-4 w-32 xl:top-20 xl:right-[max(0rem,calc(50%-34rem))] xl:w-56"
        sens={-1}
        delai={3}
      />
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-tight text-navy-900">
            {titre}
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">{intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card mt-10 flex flex-col items-center px-6 py-14 text-center">
            <IconBadge icon={icon} tone="light" size="lg" />
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-muted">
              {message}
            </p>
            <Button href={cta.href} variant="outline" className="mt-7">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
