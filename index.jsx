import { useEffect } from "react";

export function Modal({ open, onClose, children, closeLabel = "OK", style }) {

  // useEffect permet d'exécuter du code quand le composant change
  useEffect(() => {
    // Si la modal n'est pas ouverte, on ne fait rien
    if (!open) return;

    // Fonction qui détecte si on appuie sur une touche du clavier
    const handleKey = (e) => {
      // Si on appuie sur "Escape", on ferme la modal
      if (e.key === "Escape") onClose();
    };

    // On ajoute un écouteur d'événement sur le clavier
    document.addEventListener("keydown", handleKey);

   
    // elle est exécutée quand le composant disparaît ou change ce qui permet d'enelver l'écouteur d'événement 
    return () => document.removeEventListener("keydown", handleKey);

  }, [open, onClose]); // dépendances : relance l'effet si open ou onClose change

  // Si la modal n'est pas ouverte, on n'affiche rien
  if (!open) return null;

  return (
    // Fond sombre derrière la modal
    <div
      role="dialog" 
      aria-modal="true" 
      onClick={onClose} // clic autre part que la modal = fermer la modal
      style={{
        position: "fixed", // reste fixé à l'écran
        inset: 0, // prend tout l'écran
        background: "rgba(0,0,0,0.4)", // fond noir transparent
        display: "grid",
        placeItems: "center", // centre la modal
        padding: 16,
        zIndex: 1000, // passe au-dessus des autres éléments
        ...style?.overlay, // permet de personnaliser le style du fond
      }}
    >

      {/* Contenu de la modal */}
      <div
        onClick={(e) => e.stopPropagation()} 
        // empêche la fermeture quand on clique dans la modal

        style={{
          background: "#fff", // fond blanc
          borderRadius: 12, // coins arrondis
          padding: 24, // espace intérieur
          width: "min(420px, 100%)", // responsive
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)", // ombre
          ...style?.content, // personnalisation du contenu
        }}
      >
        {/* Contenu dynamique envoyé par le parent */}
        {children}

        {/* Zone des boutons */}
        <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
          <button type="button" onClick={onClose}>
            {closeLabel} {/* texte du bouton*/}
          </button>
        </div>
      </div>
    </div>
  );
}

// On exporte le composant pour pouvoir l'utiliser dans un autre projets
export default Modal;