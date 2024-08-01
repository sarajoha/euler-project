function fiboEvenSum(n) {
  if (n < 2) {
    return 0;
  }
  // if the number is less than 8, the sum will always be 2
  // for the fibonacci sequence
  if (n < 8) {
    return 2;
  }
  // the first even number of the sequence is 2
  let evens_sum = 2;

  // start with 3 and 5, to get to the second even number
  // of the sequence
  let firstTerm = 3;
  let secondTerm = 5;
  let newSecondTerm;
  while (secondTerm <= n) {
    newSecondTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = newSecondTerm;
    console.log(secondTerm);
    if (secondTerm % 2 === 0) {
      evens_sum += secondTerm;
    }
  }
  console.log("EVENS", evens_sum);
  return evens_sum;
}

fiboEvenSum(1000);
