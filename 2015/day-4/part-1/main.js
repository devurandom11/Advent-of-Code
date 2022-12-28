// Solution 1
const { parseInput, Timer } = require("../../utils/utils");
const crypto = require("crypto");
const timer = new Timer();

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
        .slice(0, 6);
      if (toTest === "000000") {
        hashFound = true;
        return --i;
      }
      testString = input + i;
    }
  }
};
timer.start();
const input = parseInput("./input.txt");
console.log(mineMeSomeCoins(input));
timer.end();
