import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
   const{user} = useGithubUser(username)
    
    return (
        <div>
            <button>Load user data</button>
            <img src={user.avatar_url} alt={user.login} width={100} />
            <h2>{user.name || "Name not available"}</h2>
            <p>{user.bio || "No bio available"}</p>
            <p>{user.login}</p>
        </div>
    );
}
