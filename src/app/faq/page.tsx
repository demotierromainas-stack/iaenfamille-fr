import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { faqSections } from "@/data/faq";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Âge minimum, prérequis, accès aux formations, déroulé des stages, protection des données : les réponses aux questions que se posent les parents.",
};

export default function FaqPage() {
  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-24">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
            Questions fréquentes
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-tight text-navy-900">
            Vous vous demandez sûrement…
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Les questions qui reviennent le plus souvent. S&apos;il en reste
            une,{" "}
            <Link href="/contact" className="font-semibold text-brand-indigo hover:underline">
              écrivez-nous
            </Link>
            .
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {faqSections.map((section) => (
            <Reveal key={section.titre}>
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                {section.titre}
              </h2>
              <div className="mt-4">
                <Accordion items={section.questions} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
