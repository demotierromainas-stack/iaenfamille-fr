/**
 * Bloc JSON-LD. `dangerouslySetInnerHTML` est la voie normale : en enfant
 * texte, React échapperait le JSON et le rendrait illisible pour les moteurs.
 * Les données viennent du dépôt ; « < » est tout de même neutralisé pour
 * qu'aucune valeur ne puisse refermer la balise.
 */
export function DonneesStructurees({ donnees }: { donnees: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(donnees).replace(/</g, "\\u003c"),
      }}
    />
  );
}
