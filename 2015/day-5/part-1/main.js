// Solution 1
const { parseInput } = require("../../utils/input-parser");

const findMeSomeStrings = (input) => {
  const inputArray = input.split("\n");
  let niceStrings = 0;

  for (const testString of inputArray) {
    if (
      testString.includes("ab") ||
      testString.includes("cd") ||
      testString.includes("pq") ||
      testString.includes("xy")
    ) {
      continue;
    }

    let duplicate = 0;
    const duplicateRegex = /([a-z])\1/; // Regular expression that matches any character followed by itself
    if (duplicateRegex.test(testString)) {
      // Test the string for a match
      duplicate += 1;
    }
    if (duplicate === 0) {
      continue;
    }
    const vowelsRegex = /[aeiou]/g; // Regular expression that matches any vowel
    let vowelCount = (testString.match(vowelsRegex) || []).length; // Count the number of vowels in the string

    if (vowelCount < 3) {
      continue;
    }
    niceStrings += 1;
  }
  return niceStrings;
};

const input = parseInput("./input.txt");
console.log(findMeSomeStrings(input));
