import { MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaStages() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-10 text-center text-white sm:px-10 sm:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hero-glow animate-drift"
            />
            <div className="relative mx-auto max-w-xl">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[28px]">
                Envie de partir en famille ?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                Dites-nous quelle destination vous attire : nous vous envoyons
                le programme complet, les dates et les tarifs de la saison.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" size="lg">
                  Demander le programme
                </Button>
                <Button
                  href="/formations-parents"
                  variant="outline-light"
                  size="lg"
                  icon={<MessageCircle className="size-4" aria-hidden />}
                >
                  Voir les formations en ligne
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
