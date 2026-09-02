"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Loader2, Send } from "lucide-react";
import {
  envoyerMessage,
  sujetsContact,
  validerMessage,
  type ContactMessage,
} from "@/lib/contact";
import { cn } from "@/lib/cn";

const vide: ContactMessage = { nom: "", email: "", sujet: "", message: "" };

export function FormulaireContact() {
  const [data, setData] = useState<ContactMessage>(vide);
  const [erreurs, setErreurs] = useState<Partial<Record<keyof ContactMessage, string>>>({});
  const [consentement, setConsentement] = useState(false);
  const [erreurConsentement, setErreurConsentement] = useState(false);
  const [etat, setEtat] = useState<"saisie" | "envoi" | "envoye">("saisie");
  // Champ leurre : invisible et non focalisable, seuls les robots le remplissent.
  const [piege, setPiege] = useState("");
  const [erreurEnvoi, setErreurEnvoi] = useState("");
  const reduced = useReducedMotion();

  const maj = (champ: keyof ContactMessage, valeur: string) => {
    setData((d) => ({ ...d, [champ]: valeur }));
    if (erreurs[champ]) setErreurs((e) => ({ ...e, [champ]: undefined }));
  };

  async function soumettre(e: React.FormEvent) {
    e.preventDefault();
    const trouvees = validerMessage(data);
    const consentementManquant = !consentement;
    setErreurs(trouvees);
    setErreurConsentement(consentementManquant);
    if (Object.keys(trouvees).length > 0 || consentementManquant) return;

    setEtat("envoi");
    setErreurEnvoi("");
    const res = await envoyerMessage({ ...data, piege });
    if (res.ok) {
      setEtat("envoye");
    } else {
      setEtat("saisie");
      setErreurEnvoi(res.erreur);
    }
  }

  if (etat === "envoye") {
    return (
      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card flex flex-col items-center p-8 text-center sm:p-10"
      >
        <span className="grid size-14 place-items-center rounded-full bg-brand-indigo/10">
          <Check className="size-7 text-brand-indigo" aria-hidden />
        </span>
        <h2 className="mt-5 font-display text-xl font-bold text-ink">
          Merci {data.nom.split(" ")[0]} !
        </h2>
        <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-muted">
          Votre message est bien parti. Nous revenons vers vous sous 48 heures
          ouvrées.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(vide);
            setConsentement(false);
            setEtat("saisie");
          }}
          className="mt-6 text-[13px] font-semibold text-brand-indigo hover:underline"
        >
          Écrire un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={soumettre} noValidate className="card relative p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Champ
          id="nom"
          label="Votre nom"
          value={data.nom}
          erreur={erreurs.nom}
          onChange={(v) => maj("nom", v)}
          autoComplete="name"
        />
        <Champ
          id="email"
          type="email"
          label="Votre e-mail"
          value={data.email}
          erreur={erreurs.email}
          onChange={(v) => maj("email", v)}
          autoComplete="email"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="sujet" className="block text-[13px] font-semibold text-ink">
          Sujet
        </label>
        <select
          id="sujet"
          value={data.sujet}
          onChange={(e) => maj("sujet", e.target.value)}
          aria-invalid={!!erreurs.sujet}
          aria-describedby={erreurs.sujet ? "sujet-erreur" : undefined}
          className={cn(
            "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-[14px] text-ink transition-colors",
            erreurs.sujet ? "border-brand-pink" : "border-line focus:border-brand-indigo",
          )}
        >
          <option value="">Choisissez un sujet…</option>
          {sujetsContact.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <Erreur id="sujet-erreur" message={erreurs.sujet} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-[13px] font-semibold text-ink">
          Votre message
        </label>
        <textarea
          id="message"
          rows={6}
          value={data.message}
          onChange={(e) => maj("message", e.target.value)}
          aria-invalid={!!erreurs.message}
          aria-describedby={erreurs.message ? "message-erreur" : undefined}
          placeholder="Dites-nous en quelques mots ce dont vous avez besoin."
          className={cn(
            "mt-2 w-full resize-y rounded-xl border bg-white px-4 py-3 text-[14px] text-ink placeholder:text-muted/60 transition-colors",
            erreurs.message ? "border-brand-pink" : "border-line focus:border-brand-indigo",
          )}
        />
        <Erreur id="message-erreur" message={erreurs.message} />
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-[12.5px] leading-relaxed text-muted">
          <input
            type="checkbox"
            checked={consentement}
            onChange={(e) => {
              setConsentement(e.target.checked);
              if (e.target.checked) setErreurConsentement(false);
            }}
            aria-invalid={erreurConsentement}
            className="mt-0.5 size-4 shrink-0 rounded border-line accent-[oklch(0.55_0.22_285)]"
          />
          <span>
            J&apos;accepte que mes informations soient utilisées pour répondre à
            ma demande. Elles ne sont ni revendues ni transmises à un tiers.
          </span>
        </label>
        {erreurConsentement && (
          <p className="mt-2 text-[12px] text-brand-pink">
            Merci de cocher cette case pour que nous puissions vous répondre.
          </p>
        )}
      </div>

      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="site-web">Ne pas remplir ce champ</label>
        <input
          id="site-web"
          name="site-web"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={piege}
          onChange={(e) => setPiege(e.target.value)}
        />
      </div>

      <div aria-live="polite">
        {erreurEnvoi && (
          <p className="mt-4 rounded-xl bg-brand-pink/10 px-4 py-3 text-[12.5px] text-brand-pink">
            {erreurEnvoi}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={etat === "envoi"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {etat === "envoi" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer le message
            <Send
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </>
        )}
      </button>
    </form>
  );
}

function Champ({
  id,
  label,
  value,
  erreur,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  erreur?: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!erreur}
        aria-describedby={erreur ? `${id}-erreur` : undefined}
        className={cn(
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-[14px] text-ink transition-colors",
          erreur ? "border-brand-pink" : "border-line focus:border-brand-indigo",
        )}
      />
      <Erreur id={`${id}-erreur`} message={erreur} />
    </div>
  );
}

function Erreur({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-2 text-[12px] text-brand-pink"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
