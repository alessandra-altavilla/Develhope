function sayHelloName (callback) {
    console.log("Hello");
    callback();
}

let cb = function printName () {
    console.log("Alessandra");
}

sayHelloName(cb); 
