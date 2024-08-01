// brute force
function multiplesOf3Or5(number) {
  let sumOfNumbers = 0;

  // como recorrer el array de 3 en 3 o 5 en 5?
  for (let step = 3; step < number; step++) {
    if (step % 3 === 0) {
      sumOfNumbers += step;
    } else if (step % 5 === 0) {
      sumOfNumbers += step;
    }
  }
  console.log(sumOfNumbers);
  return sumOfNumbers;
}

multiplesOf3Or5(49);
multiplesOf3Or5(100);

// second improvement using 2 loops
function multiplesOf3Or5(number) {
  let sumOfNumbers = 0;

  // get sum for multiples of 3
  for (let step = 3; step < number; step += 3) {
    sumOfNumbers += step;
  }

  // get sum for multiples of 5
  for (let step = 5; step < number; step += 5) {
    if (!step % 3 === 0) {
      sumOfNumbers += step;
    }
  }

  console.log(sumOfNumbers);
  return sumOfNumbers;
}

multiplesOf3Or5(49);
multiplesOf3Or5(100);

// most efficient solution using arithmetic progression
function sumOfMultiples(number, multiple) {
  // number of terms that are multiples of K (multiple), in the sequence
  // with the formula (n-1)/k
  // example, to find how many multiples of 3 there are under 10
  // ((10-1) / 3) --> (9/3) --> (3)
  // there are 3 multiples of 3 (3, 6, 9)
  let numberOfTerms = Math.floor((number - 1) / multiple);
  // natural numbers sum is n(n+1)/2
  let naturalNumbersSum = (numberOfTerms * (numberOfTerms + 1)) / 2;
  return multiple * naturalNumbersSum;
}

function sumMultiplesOf3Or5(number) {
  const multiplesOf3 = sumOfMultiples(number, 3);
  const multiplesOf5 = sumOfMultiples(number, 5);
  const multiplesOf15 = sumOfMultiples(number, 15);

  // add up the sum of the multiples of 3 and 5, and substract the multipled of 15 to avoid having
  // the duplicated values for numbers that are both divisible by 3 and 5
  const total = multiplesOf3 + multiplesOf5 - multiplesOf15;
  return total;
}
