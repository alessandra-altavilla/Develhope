//Dati due array, arr1 e arr2, crea un nuovo array chiamato mergedArray utilizzando 
// l'operatore spread che combina gli elementi di entrambi gli array.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2]

console.log(mergedArray)