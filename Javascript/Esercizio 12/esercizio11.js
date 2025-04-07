/*Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.*/

function performOperation(a, b, callback) {
    try {
        const result = a + b;
        callback(result);
    } catch (error) {
        console.error(`Si è verificato un errore: ${error.message}`);
    }
}

function displayResult(result) {
    // Simulazione di un possibile errore nel callback
    if (result > 10) {
        throw new Error("Il risultato è troppo grande!");
    }
    console.log(`Il risultato dell'operazione è: ${result}`);
}

performOperation(5, 3, displayResult); 
performOperation(8, 5, displayResult); 
