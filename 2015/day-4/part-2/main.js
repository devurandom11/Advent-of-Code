// Solution 2
const { parseInput, Timer } = require("../../utils/utils");
const crypto = require("crypto");
const timer = new Timer();

function md5(inputString) {
  const hash = crypto.createHash("md5");
  hash.update(inputString);
  return hash.digest("hex");
}

const mineMeSomeCoins = (input) => {
  console.time("main");
  let hashFound = false;
  let testString = input;
  let toTest;
  let i = 0;
  while (hashFound === false) {
    // Test the hash
    for (i; true; i++) {
      toTest = md5(testString).slice(0, 5);
      if (toTest === "00000") {
        hashFound = true;
        console.timeEnd("main");
        break;
      }
      testString = input + i;
      i++;
    }
  }
  return i;
};

timer.start();
const input = parseInput("./input.txt");
console.log(mineMeSomeCoins(input));
timer.end();
