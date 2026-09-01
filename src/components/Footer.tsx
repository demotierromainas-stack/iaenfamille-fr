import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import { footerNav, site, socials } from "@/lib/site";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  LinkedIn: LinkedinIcon,
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 hero-glow"
      />
      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.5fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              L&apos;IA à vivre en famille pour créer aujourd&apos;hui,
              comprendre demain et construire le futur ensemble.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-sm font-bold text-white">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-display text-lg font-bold">Restez informés !</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Recevez nos conseils, nouveautés et offres spéciales.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {site.name} — Tous droits réservés.{" "}
          <Link href="/mentions-legales" className="hover:text-white/70">
            Mentions légales
          </Link>{" "}
          ·{" "}
          <Link href="/confidentialite" className="hover:text-white/70">
            Confidentialité
          </Link>{" "}
          ·{" "}
          <Link href="/cgv" className="hover:text-white/70">
            CGV
          </Link>
        </div>
      </Container>
    </footer>
  );
}
