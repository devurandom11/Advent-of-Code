import sys

sys.path.insert(0, "../../utils")
import util as ut


def solve() -> int:
    with open("./input.txt") as file:
        input_str: list = file.readline().strip()
    file.close()
    counts = [0] * 10
    halfway = len(input_str) // 2

    for i in range(halfway):
        if input_str[i] == input_str[i + halfway]:
            counts[int(input_str[i])] += int(input_str[i]) * 2

    return sum(counts)


if __name__ == "__main__":
    timer: ut.Timer = ut.Timer("Main")
    timer.start()
    print(solve())
    timer.end()
    print(timer)
