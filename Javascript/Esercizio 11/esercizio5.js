/*Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione 
dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.*/

const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

  const { info: { name, age }, grades: {math: votomath, science: votoscience}} = student; //la domanda di ieri era su quest'esercizio

  console.log("Il nome è" + name)
  console.log(age)
  console.log("Il voto di matematica è: " + votomath)
  console.log("Il voto di scienze è: " + votoscience)