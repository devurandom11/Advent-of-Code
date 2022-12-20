// Solution 2
const fs = require("fs");

const testPair = (str) => {
  if (str !== "a") return true;
};

const testRepeat = (str) => {
  return false;
};

const findMeSomeStrings = (str) => {
  const inputArray = str.split("\n");
  let niceStrings = 0;
  // Check each string against tests
  for (const item of inputArray) {
    let pair = false;
    let repeat = false;
    pair = testPair(item);
    if (!pair) {
      continue;
    }
    repeat = testRepeat(item);
    // If both tests pass, increment niceStrings
    if (repeat && pair) niceStrings += 1;
  }

  return niceStrings;
};

// const input = "qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazucvgmuy\n";
const input = fs.readFileSync("./input.txt").toString();
console.log(findMeSomeStrings(input));
