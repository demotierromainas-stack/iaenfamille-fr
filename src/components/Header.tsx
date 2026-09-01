"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, UserRound, X } from "lucide-react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Routes dont le hero est sombre : le header y démarre transparent en texte
 * clair, puis bascule en blanc dès que l'utilisateur scrolle.
 */
const DARK_HERO_ROUTES = [
  "/",
  "/formations-enfants",
  "/stages-en-presentiel",
  "/mon-compte",
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const darkHero = DARK_HERO_ROUTES.some(
    (r) => pathname === r || (r !== "/" && pathname.startsWith(r + "/")),
  );
  // texte clair uniquement en haut d'une page à hero sombre
  const onDark = darkHero && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // referme le menu mobile quand on change de page
  useEffect(() => setOpen(false), [pathname]);

  // bloque le scroll de fond quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        onDark
          ? "bg-transparent"
          : "border-b border-line/80 bg-white/85 backdrop-blur-xl",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          <Logo variant={onDark ? "light" : "dark"} />

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 lg:flex"
          >
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors",
                    onDark
                      ? active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "text-ink"
                        : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/mon-compte"
              className={cn(
                "hidden items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors sm:inline-flex",
                onDark
                  ? "border-white/25 text-white hover:border-white/60 hover:bg-white/10"
                  : "border-line text-ink hover:border-brand-indigo/40 hover:text-brand-indigo",
              )}
            >
              <UserRound className="size-4" aria-hidden />
              Mon compte
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className={cn(
                "grid size-10 place-items-center rounded-full border transition-colors lg:hidden",
                onDark
                  ? "border-white/25 text-white"
                  : "border-line text-ink",
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-white lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block border-b border-line/70 py-3 text-[15px] font-medium",
                        isActive(item.href) ? "text-brand-indigo" : "text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/mon-compte"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
              >
                <UserRound className="size-4" aria-hidden />
                Mon compte
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
