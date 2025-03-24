const cars = [
    {brand: "Nissan", model: "Micra", year: 2016},
    {brand: "Ford", model: "Focus", year: 2009},
    {brand: "Fiat", model: "Panda", year: 1992},
    {brand: "Mercedes", model: "Benz", year: 2008},
    {brand: "BMW", model: "x3", year: 2024}
]

function brandModel(carsArray) {
    let brandModelArray = []
    for (let i = 0; i < carsArray.length; i++) {
        brandModelArray.push(carsArray[i].brand + " " + carsArray[i].model)
    }
    return brandModelArray
}

console.log(brandModel(cars))