/* Modifica l'hook personalizzato useGithubUser dal terzo esercizio sui 
Custom Hooks per utilizzare l'hook useSWR per recuperare i dati di un utente Github. 

Modifica l'hook useGithubUser in modo che, se il nome utente è nullo, nessuna richiesta venga effettuata. 

Modifica l'hook useGithubUser in modo che restituisca una funzione per recuperare manualmente i dati quando viene invocata.

Usa SWRConfig per impostare un valore predefinito per la prop fetcher dell'hook useSWR. */

import './App.css'
import "./App.css";
import GithubUsers from "./GithubUsers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GithubUsers />} /> 
      </Routes>
    </div>
  );
}

export default App;
