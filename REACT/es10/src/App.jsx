/*Crea un componente chiamato Color che riceve un oggetto chiamato color come prop, 
il quale avrà due proprietà: id e name. Il componente deve restituire un tag <li> che visualizza la proprietà name.

Crea un secondo componente chiamato Colors, che riceve un array di oggetti come prop, 
dove le proprietà sono sempre name e id, e visualizza una lista non ordinata (<ul>) di componenti Color. */

import "./App.css";
import Colors from "./Colors";

function App() {
  const colorData = [
    { id: 1, name: "blue" },
    { id: 2, name: "yellow" },
    { id: 3, name: "red" },
    { id: 4, name: "black" },
  ];
  return (
    <div>
      <h1>Lista Colori</h1>
      <Colors colors={colorData} />
    </div>
  );
}

export default App;
