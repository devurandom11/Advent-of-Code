// If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef

// Solution 1
const fs = require("fs");
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

const input = fs.readFileSync("./input.txt").toString();
console.log(mineMeSomeCoins(input));
