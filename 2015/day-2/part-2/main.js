/*
Tests

    A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
    A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.
*/

const fs = require("fs");

// Solution 2
const calcRibbonLength = (input) => {
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
    const ribbonLength = length * 2 + width * 2;
    const bowLength = length * width * height;

    // Calculate running total
    result += Number(ribbonLength + bowLength);
  });

  return result;
};

// Solve
const userInput = fs.readFileSync("./input.txt").toString();
console.log(calcRibbonLength(userInput));
