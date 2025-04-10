/*Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.*/

// Funzione che simula il recupero dei dati dell'utente
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: 'John' }; // Dati utente simulati
            console.log('Utente recuperato:', user.name);
            resolve(user); // Risolve la Promise con i dati dell'utente
        }, 1000); // Ritardo simulato di 1 secondo
    });
}

// Funzione che simula il recupero dei post di un utente
function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3']; // Post simulati
            console.log(`Post recuperati per ${userName}:`, posts);
            resolve(posts); // Risolve la Promise con i titoli dei post
        }, 2000); // Ritardo simulato di 2 secondi
    });
}

// Catena di Promises per gestire le operazioni
fetchUserData()
    .then(user => fetchUserPosts(user.id, user.name)) // Recupera i post dell'utente
    .then(posts => {
        console.log('Elenco dei post:', posts); // Stampa i post in console
    })
    .catch(error => {
        console.error('Si è verificato un errore:', error.message); // Gestione degli errori
    });
