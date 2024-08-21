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


number_1 = 10  # False
number_2 = 121  # True
number_3 = 271  # False
number_4 = 272  # True
number_5 = 27156  # False


# print(is_palindrom(number_1))
# print(is_palindrom(number_2))
# print(is_palindrom(number_3))
print(is_palindrome(number_4))
# print(is_palindrom(number_5))


def is_palindrome_str(number):
    # TODO: implement with str methods to reverse number
    pass


def is_palindrome_efficient(number):
    # TODO: implement more efficient method that checks extreme numbers
    pass
