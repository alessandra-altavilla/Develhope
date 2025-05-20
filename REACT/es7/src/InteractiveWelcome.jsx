import Welcome from "./Welcome";

import { useState } from "react";

export default function InteractiveWelcome() {
  const [name, setName] = useState("");

  return (
    <div>
      {/* Campo input di testo per inserire il nome */}
      <input
        type="text"
        placeholder="Enter your name" // testo grigio visibile prima che l'utente scriva
        value={name} // valore controllato: il valore visualizzato è quello nello stato
        onChange={(e) => setName(e.target.value)} // aggiorna lo stato ogni volta che l'utente digita
      />
      <Welcome name={name} />
    </div>
  );
}
