## Import the util module
import sys

sys.path.insert(0, "../../utils")
import util as ut

# Define the main function
def solve() -> int:
    solution: int = None
    # Get input as a list of ints
    input_list: list = ut.parse_input("./input.txt")
    ints: str = str(input_list[0])
    # TODO: apply algorithm to solve the problem returning an int.
    solutionDict = searchInts(ints)
    # add all values in dict
    solution = sum(solutionDict.values())
    return solution


# Search Algorithm
def searchInts(inputInts: int) -> dict:
    solutionDict: dict = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}

    for i in range(0, len(inputInts) - 1):
        if inputInts[i] == inputInts[i + 1]:
            solutionDict[int(inputInts[i])] += int(inputInts[i])
    if inputInts[0] == inputInts[-1]:
        solutionDict[int(inputInts[0])] += int(inputInts[0])
    return solutionDict


# Start the program
if __name__ == "__main__":
    timer: ut.Timer = ut.Timer("Main")
    print(solve())
