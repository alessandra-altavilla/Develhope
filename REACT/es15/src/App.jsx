/*Crea un componente GithubUser che riceve una prop username e 
recupera i dati dell'utente corrispondente dalla Github API. 
Il componente dovrebbe renderizzare il nome dell'utente, il login e l'avatar.
Crea un componente GithubUsers che recupera una lista di utenti dalla Github API 
e renderizza la lista dei nomi utente come un elenco. 
Quando un nome utente viene cliccato, il componente GithubUser 
dovrebbe essere renderizzato, passando il nome utente come prop.*/

import "./App.css";
import GithubUsers from "./GithubUsers";
import GithubUser from "./GithubUser";

function App() {
  const myUsername = "alessandra-altavilla";

  return (
    <div className="app-container">
      <h2>My GitHub profile</h2>
      <GithubUser username={myUsername} />
      <GithubUsers />
    </div>
  );
}

export default App;
