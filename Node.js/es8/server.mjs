/*Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file. 
The documentation for this method is on the Node.js File system page. */

/*import { writeFile } from "node:fs";
import fs from "node:fs";

const fileName = './esempio.txt';
const encoding = { encoding: "utf-8"};
const callback = (error) => {
    if (error) {
        console.log("There is an error", error);
        return null;
    } else {
        console.log("File written with success!")
    }
};

writeFile(fileName, "How you doin'?", encoding, callback);
const callback2 = (error, data) => {
    if(error) {
        console.log("There is an error:", error);
        return null;
    } else {
        console.log("File content:", data)
    }
};
fs.readFile(fileName, encoding, callback2)*/


import { writeFile } from "node:fs";

const nomeFile = './esempio.txt';
const contenuto = 'Questo testo è stato scritto nel file usando fs.writeFile() con callback.';

writeFile(nomeFile, contenuto, 'utf8', (errore) => {
    if (errore) {
        console.error('Errore nella scrittura del file:', errore);
        return;
    }
    console.log(`File "${nomeFile}" scritto con successo!`);
});

console.log('Sto scrivendo il file... (questo messaggio appare prima del callback)');