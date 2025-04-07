/*Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, 
come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. 
-Utilizzare setTimeout per simulare il ritardo dell'operazione.*/

// Funzione che simula il recupero dei dati da un'API

function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
  
      callback(data);
    }, 2000); 
  }
  
  function handleData(data) {
    console.log("Dati recuperati:", data);
  }

  fetchDataFromAPI(handleData);
  