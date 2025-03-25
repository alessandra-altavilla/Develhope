/* Scrivi una funzione che prende come parametro un array di oggetti, ognuno dei quali rappresenta un film con le seguenti proprietà: titolo, regista, anno e genere.
La funzione dovrebbe restituire un oggetto che contiene le seguenti proprietà: 
numMovies: il numero totale di film nell'array 
numYears: il numero di anni unici rappresentati nell'array 
genreCounts: un oggetto che contiene un conteggio di quanti film ci sono in ciascun genere rappresentato nell'array.
Stampa l'oggetto.*/

const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, genre: "Crime" },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, genre: "Drama" },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" },
    { title: "Fight Club", director: "David Fincher", year: 1999, genre: "Drama" },
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, genre: "Drama" },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999, genre: "Sci-Fi" },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, genre: "Sci-Fi" },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "Crime" },
    { title: "Parasite", director: "Bong Joon-ho", year: 2019, genre: "Thriller" }
];

const checkFilm = (filmsArray) => {
    let numMovies = filmsArray.length;

    const allYears = [];
    
    filmsArray.forEach(movie => {
        if (!allYears.includes(movie.anno)) {
            allYears.push(movie.anno);
        }
    });
    
    const numYears = allYears.length;
    
    const genreCounts = filmsArray.reduce((genreCountMap, movie) => {
        genreCountMap[movie.genere] = (genreCountMap[movie.genere] || 0) + 1;
        return genreCountMap;
    }, {});
    
    return { numMovies, numYears, genreCounts };
}

console.log(checkFilm(movies))