/*In questo esercizio, come nel precendente andremo a simulare il caricamento di moduli di 
un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

ATTENZIONE : il caricamento dei moduli in questo esercizio non sempre potrebbe riuscire!

Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" 
per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.
Gestisci eventuali errori nel caricamento dei moduli stampando in console 
"Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

Alla fine, se tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".*/

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

async function lanciaVeicoloSpaziale () {
    try {
        const moduloA = await caricaModulo("A");
        console.log(moduloA);

        const moduloB = await caricaModulo("B");
        console.log(moduloB);

        const moduloC = await caricaModulo("C");
        console.log(moduloC);

        setTimeout(() => {
            console.log("Veicolo spaziale pronto per il lancio!");
        }, 2000)
        
    } catch (error) {
        console.error("Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.")
    }
}

lanciaVeicoloSpaziale()