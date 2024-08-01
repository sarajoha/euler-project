def is_palindrom(number):
    # return true if number is palindrome
    temporal_number = number
    mod_num = 10
    # empezar a descomponer desde la unidad y no la decena
    while temporal_number > 0:  # condicion diferente
        digito = number % mod_num
        print("DIG", digito)
        print("DIG * 10", digito * 10)
        temporal_number = temporal_number - (digito * 10) - digito
        print("TEMP", temporal_number)
        mod_num = mod_num * mod_num
        # reverted_number = reverted_number + (digito * 10)
        # print("REV", temporal_number)

    if (-1 * temporal_number) == number:
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
print(is_palindrom(number_4))
# print(is_palindrom(number_5))
