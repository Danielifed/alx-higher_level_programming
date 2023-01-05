#!/usr/bin/python3
for c in range(9):
    for v in range(10):
        if c < v:
            if ((c * 10) + v) != 98:
                print("{}{}".format(c, v), end=", ")
            else:
                print("{}{}".format(c, v))
