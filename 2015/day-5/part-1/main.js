const fs = require("fs");

const findMeSomeStrings = (input) => {
  const inputArray = input.split("\n");
  let niceStrings = [];
  let naughtyStrings = [];

  for (const testString of inputArray) {
    console.warn("Nice String Array Contents: ", niceStrings);
    if (
      testString.includes("ab") ||
      testString.includes("cd") ||
      testString.includes("pq") ||
      testString.includes("xy")
    ) {
      console.log("Found a substring not allowed in: ", testString);
      naughtyStrings.push(testString);
      continue;
    }

    let duplicate = 0;
    const duplicateRegex = /([a-z])\1/; // Regular expression that matches any character followed by itself
    if (duplicateRegex.test(testString)) {
      // Test the string for a match
      duplicate += 1;
    }
    if (duplicate === 0) {
      console.log("No Duplicates Found in: ", testString);
      naughtyStrings.push(testString);
      continue;
    }
    const vowelsRegex = /[aeiou]/g; // Regular expression that matches any vowel
    let vowelCount = (testString.match(vowelsRegex) || []).length; // Count the number of vowels in the string

    if (vowelCount < 3) {
      naughtyStrings.push(testString);
      console.log("Less than 3 vowels in: ", testString);
      continue;
    }
    console.log(
      testString,
      " Passed the test and is being added to the niceString Array"
    );
    niceStrings.push(testString);
  }

  return niceStrings.length;
};

const input = fs.readFileSync("./input.txt").toString();
console.log(findMeSomeStrings(input));
