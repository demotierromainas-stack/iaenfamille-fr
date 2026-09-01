import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

/**
 * Gabarit provisoire des pages pas encore construites (étapes 3 à 5).
 * Évite toute 404 pendant les revues intermédiaires.
 */
export function PageStub({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{text}</p>
          <p className="mt-8 inline-block rounded-full border border-line bg-white px-4 py-2 text-xs font-medium text-muted">
            Page en cours de construction
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" variant="outline">
              Retour à l&apos;accueil
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
