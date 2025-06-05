/*Create a React application that simulates a simple chat interface. 
The application should display a list of messages where each message appears as a 
speech bubble aligned to the right or left, depending on whether the message was sent or received. 

Estendi l'applicazione di chat creata negli esercizi precedenti per consentire all'utente di inviare nuovi messaggi. 
L'obiettivo è aggiungere un campo di input e un pulsante "Invia" che permettono
 all'utente di digitare un nuovo messaggio e aggiungerlo alla chat quando viene inviato.

Requisiti:

Quando l'utente clicca su "Invia" o preme il tasto "Invio", il nuovo messaggio viene aggiunto all'array dei messaggi esistenti.

L'invio di un nuovo messaggio deve essere impedito se il campo di input è vuoto o contiene solo spazi.

Dopo l'invio del messaggio, il campo di input deve essere svuotato.

Dopo l'invio del messaggio, assicurarsi che la finestra della chat scorra automaticamente verso il basso.*/


import './App.css'
import { Chat } from './Chat'

function App() {
  
  return (
    <Chat />
  )
}

export default App
