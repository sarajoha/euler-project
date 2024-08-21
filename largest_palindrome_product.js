function isPalindrome(number) {
  // return true if number is palindrome
  let reverse_num = 0;
  let temp_num = number;

  while (temp_num > 0) {
    let digit = temp_num % 10;
    reverse_num = reverse_num * 10 + digit;
    // decompose number by removing the last digit in each iteration
    temp_num = temp_num; // 10
  }

  if (reverse_num == number) {
    return true;
  }

  return false;
}

function largestPalindromeProduct(number_digit) {
  // The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  let x_digits_number = 10 ** number_digit - 1;
  let x2_digits_number = x_digits_number;

  let max_product = x_digits_number * x_digits_number;
  // make one of the numers smaller until finding a palindrome number
  while (!isPalindrome(max_product)) {
    x2_digits_number = x2_digits_number - 1;
    max_product = x_digits_number * x2_digits_number;
  }

  return max_product;
}
