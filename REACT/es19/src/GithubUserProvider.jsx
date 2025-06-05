import { SWRConfig } from "swr";
import { fetcher } from "./assets/hooks/useGithubUser"; // Usa il fetcher dal custom hook

export function GithubUserProvider({ children }) {
  return (
    <SWRConfig value={{ fetcher }}>
      {children}
    </SWRConfig>
  );
}
