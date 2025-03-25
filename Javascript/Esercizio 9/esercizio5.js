/*Scrivi una funzione che prende un array di oggetti come parametro, ognuno dei quali rappresenta un libro con le seguenti proprietà: titolo, autore, anno e genere.
La funzione dovrebbe restituire un array di stringhe che contiene il titolo e l'autore di ogni libro nel formato "titolo di autore". Se l'anno del libro è successivo al 2000, aggiungi " - Moderno" alla fine della stringa. Se il genere del libro è "Science Fiction", aggiungi " - SciFi" alla fine della stringa.
Stampa il nuovo array.*/ 

const books = [
    { titolo: "Harry Potter e la pietra filosofale", autore: "J.K. Rowling", anno: 1997, genere: "Fantasy" },
    { titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", anno: 1954, genere: "Fantasy" },
    { titolo: "Le Cronache di Narnia: Il leone, la strega e l'armadio", autore: "C.S. Lewis", anno: 1950, genere: "Fantasy" },
    { titolo: "Il Trono di Spade", autore: "George R.R. Martin", anno: 1996, genere: "Fantasy" },
    { titolo: "La Quinta Stagione", autore: "N.K. Jemisin", anno: 2015, genere: "Fantasy" },
    { titolo: "Dune", autore: "Frank Herbert", anno: 1965, genere: "Science Fiction" },
    { titolo: "Neuromante", autore: "William Gibson", anno: 1984, genere: "Science Fiction" },
    { titolo: "Fondazione", autore: "Isaac Asimov", anno: 1951, genere: "Science Fiction" },
    { titolo: "Il nome della rosa", autore: "Umberto Eco", anno: 1980, genere: "Giallo" },
    { titolo: "1984", autore: "George Orwell", anno: 1949, genere: "Distopico" }
];

const checkBook = (booksArray) => {
    let titoloAutore = [];
    for (let i = 0; i < booksArray.length; i++) {
        let bookString = booksArray[i].titolo + " di " + booksArray[i].autore
        if(booksArray[i].anno > 2000) {
            bookString = bookString + " - Moderno " 
        }
        if(booksArray[i].genere == "Science Fiction") {
            bookString = bookString + " - SciFi"
        }
        titoloAutore.push(bookString)
    }
    return titoloAutore;
}

console.log(checkBook(books))