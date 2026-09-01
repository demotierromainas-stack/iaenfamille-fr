import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { confiance } from "@/data/parcours-enfants";

export function Confiance() {
  return (
    <section className="pb-12 sm:pb-16">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-8 text-white sm:px-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hero-glow animate-drift"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1.3fr_1.2fr]">
              <Image
                src="/images/enfants/bouclier-hd.webp"
                alt=""
                width={140}
                height={140}
                aria-hidden
                className="hidden size-24 object-contain lg:block"
              />

              <div>
                <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                  Apprendre en toute confiance
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  Un environnement sécurisé, sans publicité, avec des contenus
                  adaptés et un encadrement bienveillant par des experts de
                  l&apos;éducation et du numérique.
                </p>
              </div>

              <RevealGroup className="grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {confiance.map(({ icon: Icon, titre, texte }) => (
                  <RevealItem key={titre}>
                    <div className="flex items-start gap-2.5">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5">
                        <Icon className="size-3.5 text-brand-cyan" aria-hidden />
                      </span>
                      <span className="text-[11.5px] leading-snug">
                        <span className="block font-semibold">{titre}</span>
                        <span className="block text-white/55">{texte}</span>
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
