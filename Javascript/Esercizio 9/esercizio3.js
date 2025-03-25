const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function checkPrimo(numbers) {
  let result = [];

  numbers.forEach((num) => {
    console.log("Conto le cifre per ", num);
    let divisioni = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        console.log(num, "è divisibile per ", i);
        divisioni++;
      }
    }
    console.log("Il numero", num, "è divisibile per ", divisioni, "cifre");
    if (num > 1 && divisioni === 2) {
      result.push(num);
    }
  });

  return result;
}

const result = checkPrimo(numbers);
console.log("I numeri primi sono ", result);

