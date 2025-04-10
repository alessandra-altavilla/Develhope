/*Crea una Promise che simula il recupero dei dati da un'API. A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. 
-Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
-La chiamata avrà successo con il messaggio Data retrieved successfully 
se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data*/

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        const success = Math.random(); // Genera un valore random tra 0 e 1
        setTimeout(() => {
            if (success < 0.5) { // Se il valore è inferiore a 0.5, la richiesta avrà successo
                resolve("Data retrieved successfully");
            } else {
                reject(new Error("Error: Failed to fetch data")); // Se il valore è 0.5 o superiore, la richiesta fallisce
            }
        }, 0); // Simula un ritardo di 2 secondi
    });
}
for (let i = 0; i < 100; i++) {
    fetchDataFromAPI()
    .then(message => {
        console.log(message); // Stampa il messaggio se la richiesta ha successo
    })
    .catch(error => {
        console.error(error.message); // Stampa il messaggio di errore se la richiesta fallisce
    });
}


