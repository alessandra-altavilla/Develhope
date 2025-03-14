/*
Crea la variabile favoriteFood e utilizza un costrutto switch per stampare i seguenti messaggi:

"You like PIZZA!" se favoriteFood contiene il valore "pizza" 
"You like COCONUT!" se favoriteFood contiene il valore "coconut" 
"You like something else!" in tutti gli altri casi
*/

let favoriteFood = "pizza";

switch(favoriteFood) {
    case "pizza": console.log("You like PIZZA!");
    break;

    case "coconut": console.log("You like COCONUT!");
    break;

    default: console.log("You like something else!");
}