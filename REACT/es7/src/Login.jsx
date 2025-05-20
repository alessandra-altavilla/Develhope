/*Crea un componente InteractiveWelcome che esegue il rendering di un tag input e di un componente Welcome, 
che riceve una prop name e visualizza il messaggio "Welcome, {name}!" all'interno di un tag <p>.
Passa il contenuto corrente del campo input alla prop name del componente Welcome.
Il campo input deve essere un componente controllato.
Crea un componente Login contenente tre campi di input:
un campo per il nome utente,
un campo per la password,
una checkbox "Ricorda".
Tutti e tre i campi devono essere componenti controllati.
Aggiungi un pulsante "Login" al componente Login. 
Questo pulsante deve essere disabilitato finché i campi per nome utente e password sono vuoti.
Quando viene cliccato, il gestore dell’evento associato al 
pulsante deve chiamare una funzione onLogin passata come prop al componente Login, 
passandole lo stato (dei campi), che verrà stampato a console.
Aggiungi anche un pulsante "Reset" al componente Login che, quando cliccato, svuota il contenuto di tutti e tre gli input.
Usa l’elemento <form> per gestire l’invio del modulo e collega il gestore eventi handleLogin all’evento onSubmit dell’elemento form.

Come si impedisce il comportamento predefinito dell’elemento form?
Lo si impedisce chiamando e.preventDefault() all’interno del gestore handleLogin. */

import { useState } from "react";

// Componente Login che accetta una prop chiamata `onLogin`
export default function Login({ onLogin }) {
  // Stato iniziale per i dati del form
  const [data, setData] = useState({
    username: "",   
    password: "",    
    remember: false, 
  });

  // Funzione che gestisce il cambiamento nei campi del form
  function handleInput(event) {
    const { name, type, value, checked } = event.target; // destruttura le proprietà dall'elemento HTML

    // Aggiorna lo stato con il nuovo valore
    // Se è un checkbox, usa `checked`, altrimenti `value`
    setData({
      ...data, // copia tutti i valori esistenti
      [name]: type === "checkbox" ? checked : value, // aggiorna solo il campo modificato
    });
  }

  // Funzione per resettare i campi del form allo stato iniziale
  function handleResetForm() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  // Funzione chiamata al submit del form
  function handleLogin(event) {
    event.preventDefault(); // impedisce il comportamento predefinito del form (es. ricarica della pagina)
    onLogin(data); // chiama la funzione passata via props e passa i dati del form
  }

  // Condizione per disabilitare il pulsante "Login" se i campi obbligatori sono vuoti
  const isLoginDisabled =
    data.username.trim() === "" || data.password.trim() === "";

  return (
    <div>
      <form onSubmit={handleLogin}>
        {/* Campo input per lo username */}
        <div>
          <input
            name="username" // usato per identificare il campo nello stato
            type="text"
            placeholder="Username"
            value={data.username} // valore controllato dallo stato
            onChange={handleInput} // aggiorna lo stato al cambiamento
          />
        </div>

        {/* Campo input per la password */}
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInput}
          />
        </div>

        {/* Checkbox per "Ricorda" */}
        <div>
          <label>
            <input
              name="remember"
              type="checkbox"
              checked={data.remember} // stato booleano controllato
              onChange={handleInput}
            />
            Ricorda
          </label>
        </div>

        {/* Pulsanti di invio e reset */}
        <div>
          <button type="submit" disabled={isLoginDisabled}>
            Login
          </button>
          <button type="button" onClick={handleResetForm}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
