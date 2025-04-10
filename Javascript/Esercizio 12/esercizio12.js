/*Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori. 
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.*/

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // Simulazione di successo (80%) o errore (20%)
            if (success) {
                const data = { name: "John", age: 30 };
                resolve(data); // Risolvi la Promise con i dati
            } else {
                reject(new Error("Errore durante il recupero dei dati")); // Rifiuta la Promise con un messaggio di errore
            }
        }, 2000);
    });
}

fetchDataFromAPI()
    .then(data => {
        console.log("Dati recuperati:", data);
    })
    .catch(error => {
        console.error("Si è verificato un errore:", error.message);
    });