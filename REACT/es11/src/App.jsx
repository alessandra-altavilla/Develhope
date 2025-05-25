/*Crea un componente TodoList che renderizzi un elemento ul con un elemento li 
per ogni elemento contenuto nella variabile di stato todos. 
La variabile di stato todos dovrebbe essere un array di stringhe.

Il componente TodoList dovrebbe anche contenere un elemento input e un pulsante. 
Quando il pulsante viene cliccato, il gestore dell'evento dovrebbe aggiungere il
 valore dell'elemento input all'array todos.
  Dopo ogni aggiunta, l'input deve essere svuotato.

Aggiungi un pulsante "reset" che cancella completamente l'array todos quando viene cliccato.

Aggiungi un pulsante "remove" a ciascun elemento li. 
Quando viene cliccato, il gestore dell'evento dovrebbe rimuovere l'elemento corrispondente dall'array todos. */

import "./App.css";
import ToDoList from "./TodoList";

function App() {
  return <ToDoList />;
}

export default App;
