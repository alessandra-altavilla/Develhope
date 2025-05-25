/*Creare un componente FocusableInput che renderizza un elemento <input>. 
Appena il componente viene montato, l'input deve essere automaticamente focalizzato.

Utilizzare StrictMode per creare un componente con un effetto che stampi 
un messaggio solo quando il componente viene montato per la prima volta.
 Per farlo, utilizzare un ref per tenere traccia dello stato di montaggio del componente. */

import "./App.css";
import FocusableInput from "./FocusableInput";
import StrictModeComponent from "./StrictModeComponent";

function App() {
  return (
    <div>
      <h1>useRef</h1>
      <FocusableInput />
      <StrictModeComponent />
    </div>
  );
}

export default App;
