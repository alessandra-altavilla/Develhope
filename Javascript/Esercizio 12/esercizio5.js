/*Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.*/

function doubleArray(arr, callback) {
    return arr.map(callback);
}

function doubleValue(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); 
