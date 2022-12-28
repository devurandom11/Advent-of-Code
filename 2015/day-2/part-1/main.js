const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

// Solution 1
const calcWrappingPaper = (input) => {
  // Map input to array of packages
  const inputArray = input
    .split("\n")
    .map((string) => string.split("x").map(Number));

  // Calculate total wrapping paper needed
  return inputArray.reduce((total, [length, width, height]) => {
    const smallestSideArea = Math.min(
      length * width,
      length * height,
      width * height
    );
    return (
      total +
      (2 * length * width +
        2 * width * height +
        2 * height * length +
        smallestSideArea)
    );
  }, 0);
};

// Solve

const firstInput = parseInput("./input.txt");
timer.start();
console.log(calcWrappingPaper(firstInput));
timer.end();
