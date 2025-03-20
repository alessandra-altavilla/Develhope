function Smartphone (brand, name, price) {
    this.brand = brand
    this.name = name
    this.price = price
}

let samsung = new Smartphone ("Samsung", "telefono", 230)
let honor = new Smartphone ("Honor", "bellissimo", 240)

console.log(samsung, honor)