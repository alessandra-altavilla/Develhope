/*
Crea, tramite costrutto switch,
un controllo che stampi in console il prezzo di una camera d'albergo in base alle seguenti tariffe:

Tariffa BB --> 50€
Tariffa HB --> 80€
Tariffa FB --> 100€
*/

let tariffa = "BB";

switch(tariffa) {
    case "BB": 
        console.log("Il prezzo è 50€");
        break;

    case "HB": 
        console.log("Il prezzo è 80€");
        break;

    case "FB": 
        console.log("Il prezzo è 100€");
        break;

    default: console.log("La tariffa inserita non è valida");
}