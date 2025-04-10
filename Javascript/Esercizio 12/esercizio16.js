/*Convertire la seguente funzione basata su callback in una funzione basata su Promise.
function callback_BasedFunction(arg1, arg2, callback) {
 setTimeout(() => { const result = arg1 + arg2; 
 if (result % 2 !== 0) { 
 callback(null, result); 
 } else { 
  callback(new Error('Result is not odd!'), null); } }, 1000); }*/

  function promise_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
                resolve(result); // Risolvi la Promise con il risultato se è dispari
            } else {
                reject(new Error('Result is not odd!')); // Rifiuta la Promise se il risultato è pari
            }
        }, 1000); // Ritardo simulato di 1 secondo
    });
}

// Utilizzo della funzione Promise-based
promise_BasedFunction(3, 4)
    .then(result => {
        console.log(`Risultato: ${result}`); // Stampa il risultato se la Promise si risolve
    })
    .catch(error => {
        console.error(`Errore: ${error.message}`); // Stampa il messaggio di errore se la Promise viene rifiutata
    });

promise_BasedFunction(2, 6)
    .then(result => {
        console.log(`Risultato: ${result}`);
    })
    .catch(error => {
        console.error(`Errore: ${error.message}`);
    });
 

