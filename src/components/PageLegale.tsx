import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

/**
 * Gabarit des pages légales. `AComplet` rend visibles les informations que
 * seul le client peut fournir : mieux vaut un manque évident qu'une donnée
 * inventée sur une page qui engage juridiquement.
 */
export function PageLegale({
  titre,
  miseAJour,
  children,
}: {
  titre: string;
  miseAJour: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-24">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
            Informations légales
          </p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,2.75rem)] font-extrabold leading-[1.05] tracking-tight text-navy-900">
            {titre}
          </h1>
          <p className="mt-3 text-[12.5px] text-muted">
            Dernière mise à jour : {miseAJour}
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 max-w-3xl">
          <div className="space-y-8">{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Article({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold tracking-tight text-ink">
        {titre}
      </h2>
      <div className="mt-3 space-y-3 text-[13.5px] leading-relaxed text-muted [&_a]:font-semibold [&_a]:text-brand-indigo hover:[&_a]:underline [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}

/** Information que seul le client peut fournir. */
export function AComplet({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-orange/10 px-2 py-0.5 text-[12.5px] font-semibold text-brand-orange">
      <AlertTriangle className="size-3.5" aria-hidden />
      {children}
    </span>
  );
}
