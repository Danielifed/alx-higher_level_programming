#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if number < 0:
    e = -1 * (-number % 10)
else:
    e = number % 10

if e > 5:
    print("last digit of {:d} is {:d} and is greater than 5".format(number,e))
elif e < 6 and x != 0:
    print("last digit of {:d} is {:d}".format(number,e), end=" ")
    print("and is less than 6 and not 0")
else:
    print("last digit of {:d} is {:d} and is 0".format(number, e))
