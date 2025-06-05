import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.error("Errore nel caricamento degli utenti GitHub", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Lista Utenti GitHub</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
