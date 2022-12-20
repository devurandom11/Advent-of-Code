const fs = require("fs");

const findMeSomeStrings = (input) => {
  const inputArray = input.split("\n");
  const vowels = "aeiou";
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
    for (let i = 1; i < testString.length; i++) {
      if (testString[i - 1] === testString[i]) {
        duplicate += 1;
      }
    }
    if (duplicate === 0) {
      console.log("No Duplicates Found in: ", testString);
      naughtyStrings.push(testString);
      continue;
    }
    let vowelCount = 0;
    for (const char of testString) {
      for (const vowel of vowels) {
        if (char === vowel) {
          vowelCount += 1;
        }
      }
    }
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
