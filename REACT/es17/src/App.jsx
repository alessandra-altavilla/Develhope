/*Crea un custom hook useCounter che tiene traccia dello stato di un contatore e 
restituisce il valore corrente del contatore insieme a tre funzioni per 
incrementare, decrementare e resettare il contatore. 
Usa useCallback per memorizzare le funzioni utilizzate per incrementare, decrementare e resettare il contatore.

Crea un componente FilteredList che riceve una lista di oggetti, ciascuno contenente una proprietà name, id e age. 
Il componente FilteredList deve renderizzare solo gli elementi della lista la cui età è maggiore di 18, 
e il filtraggio deve avvenire solo quando la lista cambia. Usa useMemo per memorizzare la lista filtrata. */


import './App.css'
import FilteredList from './assets/components/FilteredList';
import CounterDisplay from './assets/components/CounterDisplay'


const App = () => {
  const people = [
    { id: 1, name: 'Mario', age: 25 },
    { id: 2, name: 'Luigi', age: 17 },
    { id: 3, name: 'Peach', age: 19 },
    { id: 4, name: 'Toad', age: 15 },
    { id: 5, name: 'Yoshi', age: 20 },
  ];

  return (
    <div className="App">
      <h1>Custum Hook Exercise</h1>
      
      <section>
        <h2>Demo useCounter</h2>
        <CounterDisplay />
      </section>
      
      <section>
        <h2>Demo FilteredList</h2>
        <FilteredList people={people} />
      </section>
    </div>
  );
};

export default App;
