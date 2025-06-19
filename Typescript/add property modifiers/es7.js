"use strict";
// Change the Country interface so the population property is optional
// This will fix the type error for countryB.
Object.defineProperty(exports, "__esModule", { value: true });
var countryA = {
    name: "India",
    code: "IN",
    population: 1352642280,
};
var countryB = {
    name: "Italy",
    code: "IT"
};
var countryC = {
    name: "Spain",
    code: "ES",
    population: 47450795,
};
var currencyData = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};
//currencyData.name = "Gold";
currencyData.code = "GGG";
