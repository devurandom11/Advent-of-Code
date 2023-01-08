import sys

sys.path.insert(0, "../../utils")
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
    checksum: int = 0
    for row in matrix:
        checksum += max(row) - min(row)

    return checksum


timer: ut.Timer = ut.Timer("Main")
timer.start()
print(solve())
timer.end()
print(timer)
