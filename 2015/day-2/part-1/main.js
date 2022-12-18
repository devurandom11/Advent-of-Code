/*
Tests

A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
*/

const fs = require("fs");

// Solution 1
const calcWrappingPaper = (input) => {
  // Map input to array of packages
  const inputArray = input
    .split("\n")
    .map((string) => string.split("x").map(Number));

  const result = inputArray;
  return result;
};

// Tests
const userInput = "1x1x10\n2x3x4";
console.log(calcWrappingPaper(userInput));
