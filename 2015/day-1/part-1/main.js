const { parseInput } = require("../../utils/utils");

// Solution 1
const elevator = (inputText) => {
  // Create a lookup table
  const lookupTable = { "(": 1, ")": -1 };

  // Use Array.reduce() to reduce the input array to a single value
  return inputText
    .split("")
    .reduce((floor, char) => floor + lookupTable[char], 0);
};

const firstInput = parseInput("./input.txt");
console.time("start");
console.log(elevator(firstInput));
console.timeEnd("start");
