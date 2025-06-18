interface Country {
    name: string;
    code: string;
    population?: number
}
// Complete the CountryWithPopulation interface:
//
// - Extend the Country interface
// - Add a population property with an appropriate type

interface CountryWithPopulation extends Country {
    currency: {
        name: string
    }

}

const countryA: CountryWithPopulation = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
    currency: {
        name: "Indian value"
    }
};

const countryB: Country = {
    name: "Italy",
    code: "IT"
};

const countryC: CountryWithPopulation = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
    currency: {
        name: "Spanish value"
    }
};
