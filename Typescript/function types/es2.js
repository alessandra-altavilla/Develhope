// Add types to this function declaration.
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function doubleThePopulation(value) {
    return value * 2;
}
// Correct or remove the function calls which cause type errors.
doubleThePopulation(5);
doubleThePopulation(6.12); //correzione
doubleThePopulation(8526);
//doubleThePopulation(false); //eliminazione
// Alter this function so the language2 parameter is optional.
// Hint: Check language2 is not undefined before passing it to console.log().
function languagesSpoken(country, language1, language2) {
    console.log("The languages spoken in ".concat(country, " are:"));
    if (typeof language2 === "string") {
        console.log(__makeTemplateObject(["($(language2))"], ["($(language2))"]));
    }
    console.log(language1);
    console.log(language2);
}
languagesSpoken("Colombia", "Spanish", "English");
languagesSpoken("Greece", "Greek");
languagesSpoken("New Zealand", "English", "Māori");
