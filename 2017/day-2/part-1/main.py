import sys

sys.path.insert(0, "../../utils")
import util as ut


def solve() -> int:
    with open("./input.txt") as f:
        lines: list[str] = f.readlines()
        f.close()
    matrix: list[list[int]] = [[int(x) for x in line.split("\t")] for line in lines]
    print(matrix)


timer: ut.Timer = ut.Timer("Main")
timer.start()
solve()
timer.end()
print(timer)
