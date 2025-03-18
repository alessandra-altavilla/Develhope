function Smartphone (brand, name, price) {
    this.brand = brand
    this.name = name
    this.price = price
}

let Samsung = new Smartphone ("Samsung", "telefono", 230)
let Honor = new Smartphone ("Honor", "bellissimo", 240)

console.log(Samsung, Honor)