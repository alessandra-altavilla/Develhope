/*-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
-Utilizzare setTimeout per simulare un'operazione asincrona.*/

function delayOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operazione completata dopo 2 secondi!");
        }, 2000); 
    });
}

// Utilizzo della Promise
delayOperation()
    .then(message => {
        console.log(message); // Stampa il messaggio quando la Promise si risolve
    });
