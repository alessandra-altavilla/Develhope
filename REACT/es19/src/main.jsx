import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GithubUserProvider } from "./GithubUserProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <GithubUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GithubUserProvider>
  </StrictMode>
);
