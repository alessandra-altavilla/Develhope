/*Considerando la seguente pagina HTML: 
Cerca tutti gli elementi con classe "paragrafo".
Cerca l' elemento con id "elemento-3"
Cerca tutti gli elementi h2 della pagina*/

const paragrafi = document.getElementsByClassName('paragrafo');
console.log('Elementi con classe "paragrafo":', paragrafi);
for(let i = 0; i<paragrafi.length; i++) {
    console.log(paragrafi[i].innerText)
}

const elemento3 = document.getElementById('elemento-3');
console.log('Elemento con id "elemento-3":', elemento3);

const heading2 = document.querySelectorAll('h2');
console.log('Elementi <h2>:', heading2);
heading2.forEach(nodoh2 => {
    console.log(nodoh2)
}) 
