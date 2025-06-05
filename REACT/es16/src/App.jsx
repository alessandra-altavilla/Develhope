/*Crea un hook personalizzato useCounter che tenga traccia dello stato di un 
contatore e restituisca il valore attuale del contatore, 
insieme a tre funzioni per incrementare, decrementare e resettare il contatore.

Crea un hook personalizzato che tenga traccia dello stato di un form controllato 
con gli input per username e password, e restituisca il valore attuale degli input, 
oltre a un gestore di eventi per aggiornare ciascun campo.

Crea un hook personalizzato chiamato useGithubUser che riceve uno username, 
recupera i dati dell’utente corrispondente dalla Github API e restituisce user, 
error, loading e una funzione per eseguire il fetch dei dati.

Scrivi l’hook personalizzato useCurrentLocation, che utilizza l’API navigator.geolocation 
del browser per ottenere la posizione attuale dell’utente tramite il metodo integrato getCurrentPosition. 
L’hook dovrebbe restituire la posizione corrente, una funzione per ottenere la posizione, e gli stati di errore e caricamento.
I dettagli su come usare questa API sono disponibili qui:
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API */

import "./App.css";
import { Counter } from "./Counter";
import GithubUser from "./GithubUser";

function App() {
  return (
    <>
      <Counter />
      {/*<GithubUser username="alessandra-altavilla" />*/}
    </>
  );
}

export default App;
