/*Crea un componente non controllato chiamato UncontrolledLogin, contenente tre input: 
un input per il nome utente, uno per la password e una casella di controllo "Ricorda". 
Aggiungi un pulsante "Accedi" al componente Login.
Quando si fa clic, il gestore eventi associato al pulsante dovrebbe 
richiamare una funzione onLogin che stamperà i valori degli input.
Prova ad accedere ai valori del modulo utilizzando l'API DOM leggendo l'event.target del gestore eventi onSubmit.
Aggiungere un secondo pulsante che richiama la funzione loginWithFormData 
che stampa i valori degli input utilizzando l'API FormData. */

import './App.css'
import InteractiveWelcome from './InteractiveWlcome'
import UncontrolledLogin from './UncontrolledLogin'

function App() {
  return (
    <div>
      <h2>Interactive Welcome</h2>
          <InteractiveWelcome />
    
          <h3>Please enter your credentials</h3>

    <UncontrolledLogin />
    </div>
  )
}

export default App
