import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Media } from "@/components/Media";
import { IconBadge } from "@/components/IconBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { argumentsParents } from "@/data/formations-parents";
import { accentAt } from "@/lib/accents";
import { Mascotte } from "@/components/Mascotte";

/**
 * Même hero que l'accueil et que les formations enfants : fond navy, halo de
 * marque qui dérive, titre coupé en deux avec le second mot en dégradé.
 *
 * Une différence assumée : la photo garde son cadre au lieu de se fondre dans
 * le fond comme sur l'accueil. Le visuel de l'accueil est une scène sombre
 * dont les bords se dissolvent dans le navy ; celui des parents est une scène
 * sur fond clair, qui laisserait une tache blanche si on la posait à nu. Le
 * jour où le client fournit une version sombre, on pourra reprendre le
 * `hero-media` de l'accueil.
 */
export function HeroParents() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-24 text-white sm:pt-28 lg:pb-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow animate-drift mix-blend-screen"
      />
      <Mascotte
        nom="planete"
        className="aspect-[4/3] top-20 -right-3 z-10 w-28 xl:hidden"
        boucle={600}
        parallaxe={30}
        delai={4}
      />

      <Container className="relative">
        <div className="grid items-center gap-8 pb-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <Reveal>
            <h1 className="font-display text-[clamp(2.5rem,6.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
              Formations
              <br />
              <span className="text-gradient">parents</span>
            </h1>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/70 sm:mt-5 sm:text-[17px]">
              Des formations pratiques pour utiliser l&apos;IA au quotidien,
              créer des activités et accompagner vos enfants avec confiance et
              sérénité.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
              <Button href="#formations" size="lg">
                Voir les formations
              </Button>
              <Button href="#pack" variant="outline-light" size="lg">
                Le Pack Parents
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Cadre dégradé de 2 px : il détache la photo claire du navy. */}
            <div className="rounded-[18px] bg-gradient-to-br from-brand-cyan via-brand-indigo to-brand-purple p-[2px] shadow-lift">
              <Media
                src="/images/parents/hero-parents-v2.webp"
                label="Deux parents et leur fille découvrant l'IA sur une tablette"
                tone="warm"
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="aspect-[21/10] w-full rounded-2xl"
              />
            </div>
          </Reveal>
        </div>

        {/* La bande d'arguments de la maquette, en carte translucide : une
            carte blanche aurait fait un pavé lumineux sur le navy. */}
        <RevealGroup className="relative grid gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-brand"
          />
          {argumentsParents.map(({ icon, titre, texte }, i) => (
            <RevealItem key={titre}>
              <div className="flex items-start gap-3">
                <IconBadge icon={icon} tone={accentAt(i)} />
                <div>
                  <h2 className="text-[13px] font-semibold text-white">
                    {titre}
                  </h2>
                  <p className="mt-1 text-[11.5px] leading-snug text-white/55">
                    {texte}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
