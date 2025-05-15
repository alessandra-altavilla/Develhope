/*Creare un componente funzione Counter e creare una nuova variabile di stato denominata counter inizializzata a 0.
Il valore del contatore dovrebbe essere incrementato ogni volta che l'utente clicca su un pulsante. 
Suggerimento: usa il gancio useState.
Fare in modo che il valore iniziale del contatore e l'importo dell'incremento vengano passati come oggetti di scena al componente.
Aggiungere un pulsante di decremento e un pulsante di reset al componente Contatore. 
Il pulsante di decremento dovrebbe decrementare il contatore dell'importo passato come prop, 
mentre il pulsante di reset dovrebbe reimpostare il contatore al valore iniziale passato come prop.
Crea un nuovo componente denominato CounterDisplay, 
passandogli la variabile di stato del contatore come prop di conteggio, che dovrebbe essere renderizzata all'interno di un tag h2.
Il componente CounterDisplay dovrebbe essere renderizzato all'interno del componente Counter. 
Quando si chiama la funzione "setter" per incrementare il contatore, 
il parametro dovrebbe essere una funzione o un valore immediato? Perché? Scrivete le vostre risposte in un commento.

Utilizzando "setter" il parametro dovrebbe essere una funzione perchè garantisce che React usi il valore più aggiornato*/

import Counter from "./Counter"



function App() {
    return(
        <Counter />
    )
}

export default App
