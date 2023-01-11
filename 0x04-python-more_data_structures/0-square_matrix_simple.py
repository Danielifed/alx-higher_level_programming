#!/bin/usr/python3
def square_matrix_simple(matrix=[]):
    square_of_number = []
    for x in matrix:
        square_of_number.append([z**2 for z in x])
    return square_of_number
