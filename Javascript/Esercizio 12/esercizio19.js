/*In questo esercizio andremo a simulare il caricamento di moduli di 
un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!
La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!
Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione 
"caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.
Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".*/

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    console.log("Inizio caricamento dei moduli...");

    const moduli = ["A", "B", "C"];
    for (const element of moduli) {
      const modulo = await caricaModulo(element);
    console.log(modulo);
    }

    setTimeout(() => {
        console.log("Veicolo spaziale pronto per il lancio!");
      }, 2000);

  } catch (error) {
    console.error(
      " Si è verificato un errore durante il caricamneto dei moduli"
    );
  }
}

lanciaVeicoloSpaziale();
