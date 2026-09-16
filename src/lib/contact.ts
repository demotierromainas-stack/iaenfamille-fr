/**
 * Point d'envoi unique du formulaire de contact.
 *
 * L'envoi passe toujours par un relais serveur, jamais directement par
 * Resend : la clé API exposée au navigateur permettrait à n'importe qui
 * d'envoyer des e-mails depuis le domaine du client.
 *
 * Le site est un export statique : le relais est `public/contact.php`,
 * déployé à la racine avec le reste. NEXT_PUBLIC_CONTACT_ENDPOINT permet de
 * viser une autre adresse (ex. un aperçu hébergé ailleurs).
 */

export type ContactMessage = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

export type EnvoiResultat =
  | { ok: true }
  | { ok: false; erreur: string };

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/contact.php";

export async function envoyerMessage(
  data: ContactMessage & { piege?: string },
): Promise<EnvoiResultat> {
  try {
    const reponse = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (reponse.status === 503) {
      return {
        ok: false,
        erreur:
          "L'envoi n'est pas encore activé. Écrivez-nous directement par e-mail.",
      };
    }
    if (!reponse.ok) {
      return { ok: false, erreur: "Le message n'a pas pu être envoyé." };
    }
    return { ok: true };
  } catch {
    return { ok: false, erreur: "Connexion impossible. Réessayez dans un instant." };
  }
}

/** Validation partagée entre la saisie et l'envoi. */
export function validerMessage(data: ContactMessage) {
  const erreurs: Partial<Record<keyof ContactMessage, string>> = {};

  if (data.nom.trim().length < 2) {
    erreurs.nom = "Merci d'indiquer votre nom.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    erreurs.email = "Cette adresse e-mail ne semble pas valide.";
  }
  if (!data.sujet) {
    erreurs.sujet = "Choisissez un sujet.";
  }
  if (data.message.trim().length < 10) {
    erreurs.message = "Votre message est un peu court (10 caractères minimum).";
  }

  return erreurs;
}

export const sujetsContact = [
  "Une question sur les formations parents",
  "Une question sur les parcours enfants",
  "Les stages en présentiel",
  "Un problème technique",
  "Autre",
] as const;
