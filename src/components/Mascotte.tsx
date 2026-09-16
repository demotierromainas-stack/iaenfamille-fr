"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";
import { cn } from "@/lib/cn";

/** Animations Lottie de l'astronaute, servies depuis public/lottie. */
export type MascotteNom =
  | "super-astronaute"
  | "fusee"
  | "tasse"
  | "developpeur"
  | "planete";

/**
 * Mascottes qui volent : au lieu d'un simple parallaxe, elles traversent
 * l'écran en avançant dans le sens où elles regardent quand on descend.
 * Vecteur de déplacement (x, y) pour une portée unitaire, y vers le bas.
 */
const VOLS: Partial<Record<MascotteNom, readonly [number, number]>> = {
  // nez de la fusée vers la droite, légèrement vers le haut
  fusee: [1, -0.55],
  // poing tendu et traits de vitesse : vers le haut à gauche
  "super-astronaute": [-1, -0.9],
};

/**
 * Astronaute décoratif posé en arrière-plan d'une section.
 *
 * L'animation n'avance pas toute seule : sa tête de lecture suit le scroll et
 * repart au début une fois la boucle terminée, si bien que la mascotte bouge
 * tant que l'on fait défiler la page. Un léger parallaxe la décale par rapport
 * au contenu (la fusée et le super-héros, eux, traversent l'écran), et
 * un flottement CSS l'empêche d'être figée à l'arrêt.
 *
 * Le parent doit être `relative isolate` : la mascotte se place en `-z-10`,
 * donc derrière les cartes et le texte de la section.
 *
 * Coût maîtrisé : le lecteur (lottie_light, SVG seul) et le JSON ne sont
 * chargés qu'à l'approche du viewport, et rien n'est recalculé hors écran.
 */
export function Mascotte({
  nom,
  className,
  boucle = 1000,
  sens = 1,
  parallaxe = 50,
  delai = 0,
  voler = true,
  surgir,
  traverser,
}: {
  nom: MascotteNom;
  /** Position et taille, ex. `left-4 top-10 w-40`. */
  className?: string;
  /** Pixels de scroll pour parcourir une boucle complète. */
  boucle?: number;
  /** 1 : l'animation avance quand on descend, -1 : elle recule. */
  sens?: 1 | -1;
  /** Amplitude du décalage vertical, en pixels. */
  parallaxe?: number;
  /** Décale le flottement pour que deux mascottes ne bougent pas en phase. */
  delai?: number;
  /** false : la fusée et le super-héros restent sur place (ex. dans une carte). */
  voler?: boolean;
  /**
   * Cachée derrière l'élément qui la suit : elle surgit de cette hauteur (px)
   * quand elle passe au milieu de l'écran, et s'y renfonce en s'en éloignant.
   */
  surgir?: number;
  /**
   * Coincée entre deux blocs : elle part cachée derrière celui du dessous,
   * traverse l'intervalle et va se cacher derrière celui du dessus. Valeur :
   * décalage (px) nécessaire pour disparaître de chaque côté.
   */
  traverser?: number;
}) {
  const cadre = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cadre.current;
    const conteneur = scene.current;
    if (!el || !conteneur) return;

    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vol = voler ? VOLS[nom] : undefined;
    let anim: AnimationItem | null = null;
    let total = 0;
    let visible = false;
    let chargement = false;
    let detruit = false;
    let raf = 0;
    // Position de lecture lissée, en frames, non bornée : le modulo se fait
    // à l'affichage pour que le passage fin → début reste fluide.
    let courant = 0;

    const cible = () => (window.scrollY / boucle) * total * sens;

    const afficher = () => {
      if (!anim || !total) return;
      const frame = ((courant % total) + total) % total;
      anim.goToAndStop(frame, true);

      if (reduit) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // ~ +0,6 quand la mascotte entre par le bas, ~ -0,6 quand elle sort par le haut
      const progres = (r.top + r.height / 2 - vh / 2) / vh;

      if (vol) {
        // Entrée par l'arrière (progres > 0), sortie vers l'avant (progres < 0).
        const portee = Math.min(window.innerWidth * 0.4, 260);
        const x = -progres * portee * vol[0];
        const y = -progres * portee * vol[1];
        conteneur.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      } else if (traverser) {
        const y = Math.max(-traverser, Math.min(traverser, progres * traverser * 2.5));
        conteneur.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      } else if (surgir) {
        const enfoui = Math.min(Math.abs(progres) * 2.4, 1);
        conteneur.style.transform = `translate3d(0, ${(enfoui * surgir).toFixed(1)}px, 0)`;
      } else if (parallaxe) {
        conteneur.style.transform = `translate3d(0, ${(-progres * parallaxe).toFixed(1)}px, 0)`;
      }
    };

    const tick = () => {
      raf = 0;
      if (!anim || !visible) return;
      const ecart = cible() - courant;
      courant += ecart * 0.14;
      afficher();
      if (Math.abs(ecart) > 0.05) raf = requestAnimationFrame(tick);
    };

    const demander = () => {
      if (!raf && visible && !reduit) raf = requestAnimationFrame(tick);
    };

    const charger = async () => {
      chargement = true;
      const { default: lottie } = await import(
        "lottie-web/build/player/lottie_light"
      );
      if (detruit) return;

      anim = lottie.loadAnimation({
        container: conteneur,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: `/lottie/${nom}.json`,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: true,
        },
      });

      anim.addEventListener("DOMLoaded", () => {
        if (!anim) return;
        total = anim.totalFrames;
        // Pose sur une frame parlante quand le mouvement est désactivé,
        // sinon démarre directement à la position du scroll.
        courant = reduit ? total * 0.5 : cible();
        afficher();
        el.dataset.pret = "";
      });
    };

    const observateur = new IntersectionObserver(
      ([entree]) => {
        visible = entree.isIntersecting;
        if (visible && !chargement) void charger();
        demander();
      },
      { rootMargin: "300px 0px" },
    );
    observateur.observe(el);

    window.addEventListener("scroll", demander, { passive: true });
    window.addEventListener("resize", demander, { passive: true });

    return () => {
      detruit = true;
      observateur.disconnect();
      window.removeEventListener("scroll", demander);
      window.removeEventListener("resize", demander);
      cancelAnimationFrame(raf);
      anim?.destroy();
      anim = null;
    };
  }, [nom, boucle, sens, parallaxe, voler, surgir, traverser]);

  return (
    <div
      ref={cadre}
      aria-hidden
      className={cn(
        "mascotte pointer-events-none absolute -z-10 select-none",
        className,
      )}
    >
      <div
        className="animate-flotte size-full"
        style={delai ? { animationDelay: `${-delai}s` } : undefined}
      >
        <div ref={scene} className="size-full will-change-transform" />
      </div>
    </div>
  );
}
