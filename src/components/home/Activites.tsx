import { Container } from "@/components/Container";
import { Media } from "@/components/Media";
import { SectionHeading } from "@/components/SectionHeading";
import { LiftCard, RevealGroup, RevealItem } from "@/components/Reveal";
import { activites } from "@/data/home";
import { Mascotte } from "@/components/Mascotte";
import { cn } from "@/lib/cn";

/**
 * Cinq activités ne tombent juste qu'à partir de lg (5 colonnes). En dessous,
 * les cartes orphelines s'élargissent pour boucher la ligne et passent en
 * format horizontal (visuel à gauche, texte à droite) :
 * - mobile, 2 colonnes : 2 + 2 + la dernière sur toute la largeur ;
 * - md, grille de 6 : trois cartes d'un tiers, puis deux cartes d'une moitié.
 */
function disposition(index: number) {
  // Classes écrites en entier : Tailwind ne détecte pas les noms construits.
  if (index === 4) {
    return {
      item: "col-span-2 md:col-span-3 lg:col-span-1",
      article: "flex items-center gap-4 text-left lg:block lg:text-center",
      media: "w-[46%] shrink-0 lg:mb-3 lg:w-full",
      texte: "pb-0 pr-2 lg:pb-2 lg:pr-1",
    };
  }
  if (index === 3) {
    return {
      item: "md:col-span-3 lg:col-span-1",
      article: "text-center md:flex md:items-center md:gap-4 md:text-left lg:block lg:text-center",
      media: "mb-3 w-full md:mb-0 md:w-[46%] md:shrink-0 lg:mb-3 lg:w-full",
      texte: "md:pb-0 md:pr-2 lg:pb-2 lg:pr-1",
    };
  }
  return {
    item: "md:col-span-2 lg:col-span-1",
    article: "text-center",
    media: "mb-3 w-full",
    texte: "",
  };
}

export function Activites() {
  return (
    <section className="relative isolate pb-14 sm:pb-20">
      <Mascotte
        nom="fusee"
        className="aspect-square -top-20 -right-8 w-40 xl:-top-16 xl:right-[max(0rem,calc(50%-40rem))] xl:w-52"
        delai={2}
      />
      <Container>
        <SectionHeading
          title="Des activités pour créer, comprendre et s'amuser"
          subtitle="L'IA devient un terrain de jeu créatif pour toute la famille."
        />

        <RevealGroup
          className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-6 lg:grid-cols-5"
          stagger={0.07}
        >
          {activites.map(({ title, text, tone, src }, index) => {
            const d = disposition(index);

            return (
              <RevealItem key={title} className={d.item}>
                <LiftCard>
                  <article className={cn("card group h-full p-3", d.article)}>
                    <Media
                      src={src}
                      label={title}
                      tone={tone}
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 190px"
                      className={cn("aspect-[4/3] rounded-xl", d.media)}
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div>
                      <h3 className="font-display text-[13.5px] font-bold leading-tight">
                        {title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1.5 px-1 pb-2 text-[11.5px] leading-snug text-muted",
                          d.texte,
                        )}
                      >
                        {text}
                      </p>
                    </div>
                  </article>
                </LiftCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
