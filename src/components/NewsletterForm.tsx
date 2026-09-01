"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

/**
 * V1 : validation côté client uniquement, aucun envoi réel.
 * Le branchement (Brevo / Mailchimp / route API) est prévu en V2.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
        setState(valid ? "done" : "error");
      }}
      className="mt-5"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Votre adresse e-mail
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state !== "idle") setState("idle");
        }}
        placeholder="Votre adresse e-mail"
        aria-invalid={state === "error"}
        aria-describedby={state === "error" ? "newsletter-error" : undefined}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors focus:border-white/40"
      />

      <button
        type="submit"
        className="mt-3 w-full rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
      >
        S&apos;inscrire à la newsletter
      </button>

      <div className="min-h-6" aria-live="polite">
        <AnimatePresence mode="wait">
          {state === "error" && (
            <motion.p
              key="error"
              id="newsletter-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-2 text-xs text-brand-pink"
            >
              Merci de saisir une adresse e-mail valide.
            </motion.p>
          )}
          {state === "done" && (
            <motion.p
              key="done"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-2 flex items-center gap-1.5 text-xs text-brand-cyan"
            >
              <Check className="size-3.5" aria-hidden />
              Merci ! Votre inscription sera active à l&apos;ouverture du site.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
