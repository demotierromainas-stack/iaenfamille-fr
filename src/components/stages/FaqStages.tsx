import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { faqStages } from "@/data/stages";
import { Mascotte } from "@/components/Mascotte";

export function FaqStages() {
  return (
    <section className="relative isolate pb-14 sm:pb-20">
      <Mascotte
        nom="fusee"
        className="aspect-square -top-16 -right-8 w-40 xl:top-1/3 xl:right-[max(0rem,calc(50%-35rem))] xl:w-56"
        delai={2}
      />
      <Container>
        <SectionHeading
          title="Les questions qu'on nous pose"
          subtitle="Et s'il en reste une, écrivez-nous : on répond vraiment."
        />
        <Reveal className="mx-auto mt-8 max-w-3xl">
          <Accordion items={faqStages} />
        </Reveal>
      </Container>
    </section>
  );
}
