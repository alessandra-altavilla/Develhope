/*Crea un componente funzionale Hello che renderizzi il messaggio "Hello, World!" all'interno di un tag h2. 
Crea un LanguageContext e avvolgi il componente Hello all'interno del suo provider. 
Aggiungi un tag select al componente in cui il componente Hello viene renderizzato, 
permettendo all'utente di selezionare la lingua, e passa questa scelta come valore al Provider. 
Consuma il LanguageContext all'interno del componente Hello utilizzando l'hook useContext 
e mostra il messaggio "Hello, World!" nella lingua corretta. */

import { useState } from "react";
import Hello from "./Hello";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  function handleLanguageChange(event) {
    const value = event.target.value
    setLanguage(value)
  }
  return (
    <div>
      <h1>Select Language</h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value="it">Italian</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="sp">Spanish</option>
        <option value="gr">Greek</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
