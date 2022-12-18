/*
Tests

A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
*/

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

// Tests
const userInput = fs.readFileSync("./input.txt").toString();
console.log(calcWrappingPaper(userInput));
