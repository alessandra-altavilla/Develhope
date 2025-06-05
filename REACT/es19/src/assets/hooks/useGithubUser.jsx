import useSWR from "swr";

// Fetcher per ottenere i dati utente
export const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  // Se il nome utente è nullo, nessuna richiesta viene effettuata
  const { data, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  // Funzione per recuperare manualmente i dati quando invocata
  const refetch = () => mutate();

  return { data, error, isLoading, refetch };
}
