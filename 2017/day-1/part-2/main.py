## Import the util module
import sys

sys.path.insert(0, "../../utils")
import util as ut


# def parse_input(file_path):
# with open(file_path, "r") as file:
# return file.read().strip()
# file.close()


# Define the main function
def solve() -> int:
    solution: int = None
    # Get input as a list of ints
    input_list: list = ut.parse_input("./input.txt")
    # input_list: list = ["12131415"]
    ints: str = str(input_list[0])
    print(ints)
    # TODO: apply algorithm to solve the problem returning an int.
    solutionDict = searchInts(ints)
    # add all values in dict
    solution = sum(solutionDict.values())
    return solution


# Search Algorithm
def searchInts(inputInts: int) -> dict:
    solutionDict: dict = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
    halfway: int = int(len(inputInts) // 2)
    for i in range(0, len(inputInts) // 2):
        if inputInts[i] == inputInts[i + halfway]:
            solutionDict[int(inputInts[i])] += int(inputInts[i]) * 2

    print(solutionDict)
    return solutionDict


# Start the program
if __name__ == "__main__":
    # timer: ut.Timer = ut.Timer("Main")
    print(solve())
