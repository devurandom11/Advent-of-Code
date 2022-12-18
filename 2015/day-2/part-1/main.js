const fs = require("fs");

// Solution 1
const calcWrappingPaper = (input) => {
  // Map input to array of packages
  let result = 0;
  const inputArray = input
    .split("\n")
    .map((string) => string.split("x").map(Number));

  // Sort package dimensions
  inputArray.forEach((element) => {
    element.sort((a, b) => a - b).map(Number);
    const length = element[0];
    const width = element[1];
    const height = element[2];
    const smallestSideArea = element[0] * element[1];
    // Calculate running total
    result += Number(
      2 * length * width +
        2 * width * height +
        2 * height * length +
        smallestSideArea
    );
  });

  return result;
};

// Solve
const userInput = fs.readFileSync("./input.txt").toString();
console.log(calcWrappingPaper(userInput));
