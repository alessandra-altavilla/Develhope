/*Crea uno script che:

Al click del bottone inserisca la modalità dark*/

const button = document.querySelector(".btn");
const body = document.body;

button.addEventListener("click", () => body.classList.add("theme"));