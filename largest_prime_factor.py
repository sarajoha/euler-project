def largest_prime_factor(number):
    # if number is less that 2 it does not have a prime factor
    if number < 2:
        return None

    # largest prime factor initialized as 2, because it is the smallest prime number
    largest_prime_factor = 2
    # while the number can be divided by 2, the factors are even so they are not prime
    # factorize number until getting to an odd number
    while number % 2 == 0:
        number = number / 2

    # now go over the odd factor
    factor = 3
    # factors above rootnsquare are just complementary
    while factor * factor <= number:
        # check if number can be evenly divided by factor
        # if it can, it is new largest factor
        while number % factor == 0:
            largest_prime_factor = factor
            number = number / factor
        # check only odd factors
        factor = factor + 2

    # if number is still larger than 1, we didnt find any factor
    # so the number itself must be prime
    if number > 1:
        largest_prime_factor = number

    return largest_prime_factor
