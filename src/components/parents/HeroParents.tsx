import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { IconBadge } from "@/components/IconBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { argumentsParents } from "@/data/formations-parents";

export function HeroParents() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-28">
      {/* voile coloré très doux, comme sur la maquette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 78% 30%, rgb(139 92 246 / 0.10), transparent 70%), radial-gradient(40% 50% at 20% 10%, rgb(34 211 238 / 0.08), transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-8 pb-10 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Formations parents
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.02] tracking-tight text-navy-900">
              Formations parents
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Des formations pratiques pour utiliser l&apos;IA au quotidien,
              créer des activités et accompagner vos enfants avec confiance et
              sérénité.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Media
              src="/images/parents/hero-parents.webp"
              label="Deux parents et leur fille découvrant l'IA sur une tablette"
              tone="warm"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[21/10] w-full rounded-2xl"
            />
          </Reveal>
        </div>

        <RevealGroup className="card grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {argumentsParents.map(({ icon, titre, texte }) => (
            <RevealItem key={titre}>
              <div className="flex items-start gap-3">
                <IconBadge icon={icon} tone="light" />
                <div>
                  <h2 className="text-[13px] font-semibold text-ink">{titre}</h2>
                  <p className="mt-1 text-[11.5px] leading-snug text-muted">
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
