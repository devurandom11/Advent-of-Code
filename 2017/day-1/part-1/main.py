## Import the util module
import sys

sys.path.insert(1, "../../utils")
import util as ut

# Define the main function
def solve() -> int:
    solution: int = None
    # Get input as a list of ints
    input_list: list = ut.parse_input("./input.txt")
    for i in range(len(input_list)):
        input_list[i] = int(input_list[i])

    # TODO: apply algorithm to solve the problem returning an int.

    # return the solution
    return solution


# Start the program
if __name__ == "__main__":
    timer: ut.Timer = ut.Timer("Main")
    timer.start()
    print(solve())
    timer.end()
    print(timer)
