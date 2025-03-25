let Alessandra = {
    nome: "Alessandra",
    cognome: "Altavilla",
    città: "Lecce",
    età: 28,
    provincia: "BR"
}

let automobile = {
    brand: "Nissan",
    model: "Micra",
    year: 2016
}

function checkStrings(newObject) {
    let array = []
    for(let key in newObject) {
        if(typeof newObject[key] === "string" && newObject[key].length > 5) {
            array.push(newObject[key])
        }
    }
    
    return array 
}

console.log(checkStrings(Alessandra))
console.log(checkStrings(automobile))


