import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import "./App.css"

function App() {
  // Funzione chiamata quando l'utente effettua il login
  // Riceve i dati dal componente Login e li stampa nella console
  const handleLogin = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div>
      <h2>Interactive Welcome</h2>
      <InteractiveWelcome />

      <h2>Login</h2>

      {/* Componente Login: riceve una prop chiamata onLogin */}
      {/* Quando l'utente invia il form, Login chiama handleLogin con i dati */}
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;

