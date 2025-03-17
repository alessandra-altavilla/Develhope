/*
Stampa in console tutti i numeri pari da 0 a 20.
Esempio:

10 % 2 --> restituisce 0 perché 10 / 2 non ha resto
10 % 4 --> restituisce 2 perché 10 / 4 ritorna 2 con un resto di 2
*/

for(let i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}