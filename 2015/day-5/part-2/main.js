// Solution 2
const { parseInput } = require("../../utils/input-parser");

// Slide a window of two characters over the string, searching the string before and after the window for duplicates.
const testPair = (str) => {
  let searchStr1, searchStr2;
  for (let i = 0; i < str.length - 2; i++) {
    const search = `${str[i] + str[i + 1]}`;
    searchStr1 = str.slice(0, i);
    searchStr2 = str.slice(i + 2, str.length);
    if (searchStr1.includes(search) || searchStr2.includes(search)) return true;
  }
  return false;
};
// Check for duplicates with exactly 1 char between
const testRepeat = (str) => {
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) return true;
  }
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

const input = parseInput("./input.txt");
console.log(findMeSomeStrings(input));
