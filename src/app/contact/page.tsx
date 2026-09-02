import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MessagesSquare, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { IconBadge } from "@/components/IconBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { FormulaireContact } from "@/components/contact/FormulaireContact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question sur nos formations ou nos stages ? Écrivez-nous, nous répondons sous 48 heures ouvrées.",
};

const reperes = [
  {
    icon: Clock,
    titre: "Réponse sous 48 h",
    texte: "Du lundi au vendredi, hors jours fériés.",
  },
  {
    icon: MessagesSquare,
    titre: "Une vraie personne",
    texte: "Pas de réponse automatique : quelqu'un lit votre message.",
  },
  {
    icon: ShieldCheck,
    titre: "Vos données restent ici",
    texte: "Utilisées pour vous répondre, jamais transmises à un tiers.",
  },
];

export default function ContactPage() {
  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-24">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
            Contact
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-tight text-navy-900">
            Parlons de votre famille
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Une question sur une formation, un doute sur la tranche d&apos;âge de
            votre enfant, ou l&apos;envie d&apos;en savoir plus sur un stage ?
            Écrivez-nous, on vous répond.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <Reveal>
            <FormulaireContact />
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="card p-6">
                <IconBadge icon={Mail} tone="indigo" />
                <h2 className="mt-4 font-display text-[15px] font-bold text-ink">
                  Par e-mail
                </h2>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  Vous préférez écrire directement ?
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-block text-[13px] font-semibold text-brand-indigo hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <RevealGroup className="card space-y-5 p-6" stagger={0.07}>
              {reperes.map(({ icon: Icon, titre, texte }) => (
                <RevealItem key={titre}>
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-indigo/10">
                      <Icon className="size-4 text-brand-indigo" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[13px] font-semibold text-ink">{titre}</h3>
                      <p className="mt-1 text-[11.5px] leading-snug text-muted">
                        {texte}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.14}>
              <div className="rounded-2xl bg-brand-indigo/5 p-6 ring-1 ring-brand-indigo/15">
                <h2 className="font-display text-[15px] font-bold text-ink">
                  La réponse est peut-être déjà là
                </h2>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  Beaucoup de questions reviennent : âge minimum, prérequis,
                  déroulé des stages.
                </p>
                <Link
                  href="/faq"
                  className="mt-3 inline-block text-[13px] font-semibold text-brand-indigo hover:underline"
                >
                  Voir les questions fréquentes
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
