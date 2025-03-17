function sayHelloName (callback) {
    setTimeout(function() {
        console.log("Hello");
        callback();
    }, 1000);
}

let printName = function () {
    console.log("Alessandra");
}

sayHelloName(printName); 
