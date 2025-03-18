function sayHelloName (callback) {
    const stampaDelay = function() {
        console.log("Hello");
        callback();
    }

    setTimeout(stampaDelay, 1000);
}

let printName = function () {
    console.log("Alessandra");
}

sayHelloName(printName); 
