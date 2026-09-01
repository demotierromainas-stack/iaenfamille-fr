import { MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";

export function CtaEnfants() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-violet/10 via-brand-indigo/10 to-brand-cyan/10 ring-1 ring-brand-indigo/15">
            <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto]">
              <Media
                src="/images/enfants/cta-enfant.webp"
                label="Enfant souriant avec une tablette"
                tone="kids"
                sizes="220px"
                className="hidden h-32 w-52 rounded-2xl lg:block"
              />

              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  Prêt à faire découvrir l&apos;IA à votre enfant ?
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  Choisissez le parcours qui lui correspond ou demandez conseil
                  à notre équipe.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="#parcours">Choisir un parcours</Button>
                <Button
                  href="/contact"
                  variant="outline"
                  icon={<MessageCircle className="size-4" aria-hidden />}
                >
                  Demander des infos
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
