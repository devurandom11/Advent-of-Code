const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

// Solution 2
const calcRibbonLength = (input) => {
  // Map input to array of packages
  const inputArray = input
    .split("\n")
    .map((string) => string.split("x").map(Number));

  // Calculate total ribbon length needed
  return inputArray.reduce((total, [length, width, height]) => {
    const smallestPerimeter = Math.min(
      2 * (length + width),
      2 * (width + height),
      2 * (height + length)
    );
    const bowLength = length * width * height;
    return total + (smallestPerimeter + bowLength);
  }, 0);
};

// Solve
timer.start();
const firstInput = parseInput("./input.txt");
console.log(calcRibbonLength(firstInput));
timer.end();
