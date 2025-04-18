/*Crea la tua To-Do List mediante i metodi visti nel video.
Crea una funzione che ti permetterà di:
Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
Creare un checkbox per ogni task aggiunto.*/

// Seleziona gli elementi dal DOM
const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

// Funzione per aggiungere un task
function addProduct() {
  // Controlla che l'input non sia vuoto
  if (input.value) {
    console.log('Aggiungendo task:', input.value);

    // Crea un elemento 'li'
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Crea un elemento checkbox senza usare .type
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // Aggiungi il checkbox al task
    li.appendChild(checkbox);

    // Aggiungi il testo del task usando innerText
    const taskText = document.createElement('span');
    taskText.innerText = input.value;
    li.appendChild(taskText);

    // Aggiungi l'elemento 'li' alla lista
    ul.appendChild(li);

    console.log('Task aggiunto con successo:', taskText.innerText);

    // Pulisce il campo di input
    input.value = "";
  }
}

// Assegna l'evento click al bottone
button.onclick = addProduct;


