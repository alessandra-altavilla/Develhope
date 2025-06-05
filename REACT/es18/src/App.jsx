/* Crea un nuovo branch partendo dal primo esercizio sui props. 
Modifica il componente App in modo che avvolga un componente Routes e aggiungi un singolo Route al 
percorso / che renderizza il componente Welcome, passandogli una prop name. 
Renderizza il componente App all'interno di un componente BrowserRouter.

Aggiungi un nuovo Route al percorso /counter che renderizza il componente Counter dal primo esercizio sullo stato.

Aggiungi un nuovo Route al percorso /users/:username che renderizza il componente ShowGithubUser, 
che riceve il parametro username dalla path e renderizza il componente GithubUser, passandogli il username ricevuto.

Aggiungi tre Link all'interno del componente principale App e usali per navigare tra i tre percorsi.

Aggiungi un Route per gestire i percorsi non esistenti, che renderizzi un messaggio di "Pagina non trovata".

Crea un componente GithubUserList che, recuperando dati da questa API: https://api.github.com/users, 
mostri un elenco di link con i nomi utente di GitHub. Cliccando su un nome utente, verrà visualizzato il componente ShowGithubUser.

Aggiungi un Route al percorso /users per mostrare il componente GithubUserList. Se esiste un percorso /users/:username, 
rimuovilo dal componente App e aggiungi un nuovo route annidato all'interno del percorso /users.

Aggiungi un route index al percorso GithubUsers, che mostri il messaggio "Aggiungi un utente e selezionalo". */

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/counter">Contatore</Link> | 
        <Link to="/users">Utenti GitHub</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Alessandra" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<h2>Pagina non trovata</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
