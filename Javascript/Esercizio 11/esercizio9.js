//Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
//Utilizzare il parametro rest per raccogliere gli argomenti.

/*function filterOutOdds(...numbers) {
    let numeri = []
    numbers.forEach(number => {
        if(number % 2 == 0) {
            numeri.push(number)
        }    
    });
    return numeri
}

let valori = filterOutOdds(2, 3, 4, 5,6)

console.log(valori)*/

function filterOutOdds(...numbers) {
    return numbers.filter(number => number % 2 == 0)
}

let valori = filterOutOdds(2, 3, 4, 5, 6)

console.log(valori)