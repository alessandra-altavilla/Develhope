//Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
//Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function somma (...numbers) {
    return numbers.reduce((totale, numero) => totale + numero, 0)
}

const total = somma(3, 4, 5)

console.log(total)