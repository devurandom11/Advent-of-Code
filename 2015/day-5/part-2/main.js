// Solution 2
const fs = require("fs");

const testPair = (str) => {
  for (let i = 0; i < str.length - 2; i++) {
    const search = `${str[i] + str[i + 1]}`;
    let searchStr1 = str.slice(0, i);
    let searchStr2 = str.slice(i + 2, str.length);
    if (searchStr1.includes(search) || searchStr2.includes(search)) return true;
  }
  return false;
};

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

// const input = "qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazuccvucgmuy\n";
const input = fs.readFileSync("./input.txt").toString();
console.log(findMeSomeStrings(input));
