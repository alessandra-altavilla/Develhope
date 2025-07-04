/*There should be a script that:

Defines a function
Exports that function with module.exports
There should be another script that:

Uses require() to import the function from the other script
Calls the imported function*/

function Hello(name) {
    console.log(`Hello! ${name}`)
}

module.exports = Hello
