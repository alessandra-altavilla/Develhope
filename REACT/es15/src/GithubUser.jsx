import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const json = await response.json();
                setUser(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [username]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>No user found.</p>;

    return (
        <div>
            <img src={user.avatar_url} alt={user.login} width={100} />
            <h2>{user.name || "Name not available"}</h2>
            <p>{user.bio || "No bio available"}</p>
            <p>{user.login}</p>
        </div>
    );
}
