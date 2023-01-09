import sys
import time

sys.path.insert(0, "../../utils/")
import util as ut


def solve() -> int:
    with open("./input.txt") as f:
        lines: list[str] = f.readlines()
        f.close()
    # Parse input into matrix
    matrix: list[list[int]] = []
    for line in lines:
        # Split the line on tabs and remove any extra spaces
        digits: list[str] = [x.strip() for x in line.split("\t")]
        # Convert the digits to integers and append them to the matrix
        matrix.append([int(x) for x in digits])

    # Calculate checksum
    # Calculate checksum

    even_divisible = 0
    for row in matrix:
        # Sort the row in ascending order
        row.sort()
        tracker = 0
        j = len(row) - 1
        # search with two pointers
        while tracker < j:
            for move in range(len(row) // 2):
                if row[j] % row[move] == 0:
                    even_divisible += row[j] // row[move]
                    break
            # Iterate one pointer and tracker
            j -= 1
            tracker += 1
    return even_divisible


timer: ut.Timer = ut.Timer("Main")
timer.start()
print(solve())
timer.end()
print(timer)
