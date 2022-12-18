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
