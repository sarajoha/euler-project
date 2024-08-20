function multiplesOf3Or5(number) {
  let sumOfNumbers = 0;

  // como recorrer el array de 3 en 3 o 5 en 5?
  for (let step = 3; step < number; step++) {
      if (step % 3 === 0) {
        sumOfNumbers += step
    } else if (step % 5 === 0) {
        sumOfNumbers += step
    }
  }
  console.log(sumOfNumbers)
  return sumOfNumbers
}

multiplesOf3Or5(49);
multiplesOf3Or5(1000);