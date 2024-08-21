def is_palindrome(number):
    # return true if number is palindrome
    reverse_num = 0
    temp_num = number

    while temp_num > 0:
        digit = temp_num % 10
        reverse_num = (reverse_num * 10) + digit
        # decompose number by removing the last digit in each iteration
        temp_num = temp_num // 10

    if reverse_num == number:
        return True

    return False


def largest_palindrome_product(number_digit):
    # The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    x_digits_number = 10**number_digit - 1
    x2_digits_number = x_digits_number

    max_product = x_digits_number * x_digits_number
    # make one of the numers smaller until finding a palindrome number
    # TODO: improve algorithm to check
    while not is_palindrome(max_product):
        x2_digits_number = x2_digits_number - 1
        max_product = x_digits_number * x2_digits_number

    return max_product
