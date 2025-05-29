import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false); // Stato per controllare se è stata effettuata una ricerca

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setError("Please enter a valid username.");
      return;
    }

    try {
      setError(null);
      setSearchPerformed(true); // Segnala che la ricerca è stata effettuata
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data.items);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Search GitHub Users</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub user..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (e.target.value.trim() === "") {
              setUsers([]);
              setSearchPerformed(false);
              setSelectedUser(null);
            }
          }}
        />

        <button type="submit">Search</button>
      </form>

      <ul>
        {users.length > 0
          ? users.map((user) => (
              <li key={user.id} onClick={() => setSelectedUser(user.login)}>
                {user.login}
              </li>
            ))
          : searchPerformed && (
              <p>No users found.</p>
            ) // Mostra il messaggio solo dopo una ricerca
        }
      </ul>

      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}
