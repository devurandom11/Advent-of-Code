// Solution 2

const fs = require("fs");

const testPair = (str) => {
  return false;
};

const testRepeat = (str) => {
  return false;
};

const findMeSomeStrings = (str) => {
  const inputArray = str.split("\n");
  let niceStrings = 0;
  let pair = false;
  let repeat = false;

  // If both tests pass, increment niceStrings
  if (pair && repeat) {
    niceStrings += 1;
  }

  return niceStrings;
};

// const input = "qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazucvgmuy\n";
const input = fs.readFileSync("./input.txt").toString();
console.log(findMeSomeStrings(input));
