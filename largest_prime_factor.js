function isPrime(number) {
  if (number == 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number === 3) {
    return true;
  }

  let squareRoot = Math.sqrt(number);
  // prime number has the form 6n+1 or 6n-1
  for (let candidate = 5; candidate <= squareRoot; candidate = candidate + 6) {
    if (number % candidate === 0 || number % (candidate + 2) === 0) {
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(number) {
  // No prime factors exist for numbers less than 2
  if (number < 2) {
    return null;
  }

  let largestFactor = null;

  // First, remove all factors of 2
  // to get to the largest odd factor of n
  while (number % 2 === 0) {
    largestFactor = 2;
    number = number / 2;
  }

  // Now check for odd factors from 3 upwards
  let factor = 3;
  while (factor * factor <= number) {
    // Only need to go up to the square root of n
    // factors of n will divide it evenly
    while (number % factor === 0) {
      largestFactor = factor; // Update largest factor to current factor
      number = number / factor; // Reduce n by dividing it by the factor
    }
    factor += 2; // Skip even numbers
  }

  // If n is still greater than 1 after all factors up to its square root have been checked,
  // then it must be prime and it is larger than any factor we've already seen
  if (number > 1) {
    largestFactor = number;
  }

  return largestFactor; // Return the largest prime factor
}

// largestPrimeFactor(2);
// console.log(largestPrimeFactor(2))
// console.log(largestPrimeFactor(3))
console.log(largestPrimeFactor(4));
// largestPrimeFactor(13195);
