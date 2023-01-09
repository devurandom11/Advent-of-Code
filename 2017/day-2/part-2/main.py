import sys
import time

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
    even_divisible: int = 0
    for row in matrix:
        print(f"Length of row: {len(row)}")
        time.sleep(1)
        for i in range(0, len(row)):
            # time.sleep(1)
            for j in range(0, len(row)):
                if i == j:
                    continue
                if row[i] % row[j] == 0:
                    even_divisible += row[i] / row[j]
                    print(f"Found a match! {row[i]} : {row[j]}")
                    print(
                        f"This is a match because {row[i]} /divided by {row[j]} == {row[i]/row[j]}"
                    )
                    time.sleep(3)
                continue
        print("Moving to next row")

    return even_divisible


timer: ut.Timer = ut.Timer("Main")
timer.start()
print(solve())
timer.end()
print(timer)
