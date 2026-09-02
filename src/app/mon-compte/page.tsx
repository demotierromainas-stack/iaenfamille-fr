import type { Metadata } from "next";
import { BookOpen, Download, PlayCircle, UserRound } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Mon compte",
  description:
    "L'espace membre ouvrira avec le lancement des formations : vos parcours, vos ressources et vos attestations.",
};

const aVenir = [
  {
    icon: PlayCircle,
    titre: "Vos formations",
    texte: "Reprendre là où vous vous étiez arrêté, sur n'importe quel appareil.",
  },
  {
    icon: Download,
    titre: "Vos ressources",
    texte: "Les fiches, modèles et supports à télécharger de chaque module.",
  },
  {
    icon: BookOpen,
    titre: "Les parcours enfants",
    texte: "Suivre l'avancement de chacun de vos enfants, séparément.",
  },
  {
    icon: UserRound,
    titre: "Vos stages",
    texte: "Le programme détaillé et les informations pratiques de votre séjour.",
  },
];

export default function MonComptePage() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-28 pb-20 text-white sm:pt-32 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow animate-drift mix-blend-screen"
      />
      <Container className="relative">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-cyan">
            Espace membre
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-tight">
            Bientôt
            <br />
            <span className="text-gradient">votre espace</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-white/65">
            L&apos;espace membre ouvrira en même temps que les formations. Vous
            y retrouverez tout ce que vous avez acheté, à votre rythme et sans
            limite de durée.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aVenir.map(({ icon: Icon, titre, texte }) => (
            <RevealItem key={titre}>
              <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-sm">
                <span className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/5">
                  <Icon className="size-5 text-brand-cyan" aria-hidden />
                </span>
                <h2 className="mt-4 font-display text-[14px] font-bold">{titre}</h2>
                <p className="mt-2 text-[11.5px] leading-snug text-white/50">
                  {texte}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-8 rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-xl font-bold">
                Prévenez-moi de l&apos;ouverture
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                Laissez votre adresse : vous serez prévenu dès que les
                inscriptions ouvrent, sans autre message entre-temps.
              </p>
              <div className="mt-6">
                <Button href="/formations-parents" variant="outline-light">
                  Voir le catalogue en attendant
                </Button>
              </div>
            </div>
            <NewsletterForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
