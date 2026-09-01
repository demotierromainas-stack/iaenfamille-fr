import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { destinations } from "@/data/destinations";
import { STAGES_HREF } from "@/lib/site";

export function Destinations() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <SectionHeading
          title="Des destinations d'exception pour nos stages en présentiel"
          subtitle="Apprenez, partagez et créez des souvenirs inoubliables."
        />

        <RevealGroup className="mt-9 grid gap-5 md:grid-cols-3">
          {destinations.map((d) => (
            <RevealItem key={d.slug}>
              <Link
                href={`${STAGES_HREF}/${d.slug}`}
                className="group relative block h-64 overflow-hidden rounded-2xl"
              >
                <PlaceholderImage
                  label={d.heroLabel}
                  tone={d.tone}
                  showLabel={false}
                  className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/45 to-transparent"
                />

                <div className="relative flex h-full flex-col justify-between p-5 text-white">
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                      <span aria-hidden>{d.flag}</span>
                      {d.name}
                    </h3>
                    <p className="mt-2 max-w-[16ch] text-sm leading-snug text-white/75">
                      {d.tagline}
                    </p>
                  </div>

                  <span className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur transition-all duration-300 group-hover:border-white/70 group-hover:bg-white/20">
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
