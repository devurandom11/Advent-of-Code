const fs = require("fs");

const findMeSomeStrings = (input) => {
  const inputArray = input.split("\n");
  let numNice = 0;
  for (const testString of inputArray) {
    if (
      testString.includes("ab") ||
      testString.includes("cd") ||
      testString.includes("pq") ||
      testString.includes("xy")
    ) {
      console.log("Found a string not allowed in", testString);
      continue;
    }
    let duplicate = 0;
    for (let i = 0; i < testString.length; i++) {}
  }
};

const input = fs.readFileSync("./input.txt").toString();
findMeSomeStrings(input);
