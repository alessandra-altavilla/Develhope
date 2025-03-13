let primitive = {}

/* if (typeof primitive == "string" || typeof primitive == "boolean" || typeof primitive == "number") {
    console.log(typeof primitive)
} */

if (typeof primitive == "string") { 
    console.log("Il valore è di tipo", typeof primitive)
} else if (typeof primitive == "number") {
    console.log("Il valore è di tipo", typeof primitive)
} else if (typeof primitive == "boolean") {
    console.log("Il valore è di tipo", typeof primitive)
} else {
    console.log("Il valore è un tipo diverso da quelli indicati")
}