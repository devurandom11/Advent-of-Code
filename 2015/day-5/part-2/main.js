// Solution 2

const fs = require("fs");

function testStrings(str) {
  const regex = /(.)\1(?!\1)(.)\2/;
  return regex.test(str);
}

function testRepeat(str) {
  const regex = /([a-zA-Z])[a-zA-Z](?=[a-zA-Z]\1)/;
  return regex.test(str);
}
const findMeSomeStrings = (input) => {
  const inputArray = input.split("\n");
  let niceStrings = 0;

  for (const testString of inputArray) {
    let pair = false;
    let repeat = false;
    pair = testStrings(testString);
    repeat = testRepeat(testString);

    // // Check for non-overlapping pairs
    // for (let i = 0; i < testString.length - 3; i++) {
    //   if (
    //     testString.substring(i, i + 2) === testString.substring(i + 2, i + 4)
    //   ) {
    //     pair = true;
    //     break;
    //   }
    // }

    // // Check for repeating characters with one letter between them
    // for (let i = 0; i < testString.length - 2; i++) {
    //   if (testString[i] === testString[i + 2]) {
    //     repeat = true;
    //     break;
    //   }
    // }

    // If both tests pass, increment niceStrings
    if (pair && repeat) {
      niceStrings += 1;
    }
  }

  return niceStrings;
};

// const input = "qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazucvgmuy\n";
const input = fs.readFileSync("./input.txt").toString();
console.log(findMeSomeStrings(input));
