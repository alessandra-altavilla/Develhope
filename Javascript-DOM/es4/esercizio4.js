/*Implementare il codice necessario per:

Recuperare il valore di ciascun campo di input e creare un oggetto person contenente le proprietà: firstName, lastName e age.
Infine recuperare l'elemento forme aggiungere l'attributo data-person contenente l'oggetto person in formato json. */

// Recupera gli elementi del form

// Recupera il valore di ciascun campo di input e crea un oggetto person

const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');

const person = {
  firstName: firstNameInput.value,
  lastName: lastNameInput.value,
  age: ageInput.value,
};

// Aggiungi l'attributo data-person contenente l'oggetto person in formato JSON
form.setAttribute('data-person', JSON.stringify(person));

console.log('Oggetto person:', person);
console.log('Attributo data-person:', form.getAttribute('data-person'));
