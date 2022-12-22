// Solution 1
const { parseInput } = require("../../utils/input-parser");
const crypto = require("crypto");

const mineMeSomeCoins = (input) => {
  let hashFound = false;
  let testString = input;
  let i = 0;
  while (hashFound === false) {
    // Test the hash
    for (i; true; i++) {
      let toTest = crypto
        .createHash("MD5")
        .update(testString)
        .digest("hex")
        .slice(0, 5);
      if (toTest === "00000") {
        hashFound = true;
        return --i;
      }
      testString = input + i;
    }
  }
};

const input = parseInput("./input.txt");
console.log(mineMeSomeCoins(input));
