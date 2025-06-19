// Add types to this function declaration.

function doubleThePopulation(value: number) : number {
  return value * 2;
}
// Correct or remove the function calls which cause type errors.

doubleThePopulation(5);

doubleThePopulation(6.12); //correzione

doubleThePopulation(8_526);

//doubleThePopulation(false); //eliminazione

// Alter this function so the language2 parameter is optional.
// Hint: Check language2 is not undefined before passing it to console.log().

function languagesSpoken(country: string, language1: string, language2?: string): void {
    console.log(`The languages spoken in ${country} are:`);
    console.log(language1);
    if (typeof language2 === "string") { //anche se scritto così in cosole continua a dare undefined, perchè?
        console.log(language2);
    }
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");

export {};
