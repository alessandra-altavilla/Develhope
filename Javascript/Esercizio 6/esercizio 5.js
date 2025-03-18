function canPlay() {
    let sport = " Football";
    let personName; 

    if (true) {
      personName = "Cosimo";
    }

    console.log(personName + sport);
  }

  /* Lo scope di personName è limitato all'interno dell'if perchè la variabile let personName viene creata al suo interno, quindi al di fuori di essa non esiste. Quindi l'errore è dovuto al fatto che dentro il console.log personName non ha valore.*/