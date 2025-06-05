import { useState } from "react";
import { useGithubUser } from "./assets/hooks/useGithubUser";

export default function GithubUsers() {
  const [username, setUsername] = useState("");
  const { data, error, isLoading, refetch } = useGithubUser(username);

  return (
    <div>
      <h2>Github User</h2>
      <input
        type="text"
        placeholder="Text here the username GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={refetch} disabled={!username}>
        Refresh
      </button>

      {error && <p>An error has occurred</p>}
      {isLoading && <p>Loading...</p>}
      {!data && username && <p>No user found.</p>}

      {data && (
        <div>
          <p>Username: {data.login}</p>
          <p>Bio: {data.bio}</p>
          <p>Followers: {data.followers}</p>
        </div>
      )}
    </div>
  );
}
