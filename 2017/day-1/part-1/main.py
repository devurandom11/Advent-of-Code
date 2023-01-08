import sys

sys.path.insert(0, "../../utils")
import util as ut


def solve() -> int:
    with open("./input.txt") as f:
        input_str = f.read().strip()

    # Initialize count of each digit to 0
    counts = [0] * 10

    # Iterate over the digits in the input string
    for i in range(len(input_str) - 1):
        if input_str[i] == input_str[i + 1]:
            counts[int(input_str[i])] += int(input_str[i])

    # Check if first and last digits are equal
    if input_str[0] == input_str[-1]:
        counts[int(input_str[0])] += int(input_str[0])

    return sum(counts)


if __name__ == "__main__":
    timer: ut.Timer = ut.Timer("Main")
    timer.start()
    print(solve())
    timer.end()
    print(timer)
