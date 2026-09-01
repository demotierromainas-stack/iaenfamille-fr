import { Container } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { faqStages } from "@/data/stages";

export function FaqStages() {
  return (
    <section className="pb-14 sm:pb-20">
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
