/*In questo esercizio dato un array di studenti:
Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.*/

const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

  studenti.forEach(student => {
    console.log(student.nome)
  })

  const studentVoto = studenti.find(studente => studente.voto > 90)
  console.log("Lo studente con voto più alto di 90 è: " + studentVoto.nome + " con il voto " + studentVoto.voto)

  const calcoloVotoMedio = Math.round(studenti.reduce((totale, studente) => totale + studente.voto, 0) / studenti.length) 
  
  console.log(calcoloVotoMedio)

  const newStudenti = studenti.map(studente => studente.nome.toUpperCase())
  console.log(newStudenti)

  const studentiBravi = studenti.filter(studente => studente.voto > 85)
  console.log(studentiBravi)