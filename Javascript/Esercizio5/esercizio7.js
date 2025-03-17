/* Scrivi una funzione di nome sayHelloName che prende come parametro una stringa. 
Questa funzione deve restituire la concatenazione di due stringhe, per capirci, il risultato finale dovrà essere:
 'Hello John'. In questo caso, John è la stringa che passiamo come parametro alla funzione (cioè il nostro nome).*/

let nome = "John";

 function sayHelloName (personName) {
    return "Hello " + personName;
}

console.log(sayHelloName(nome)); 

