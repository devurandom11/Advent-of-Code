const { parseInput } = require("../../utils/input-parser");

// Solution 1
const elevator = (inputText) => {
  // Create a lookup table
  const lookup = { "(": 1, ")": -1 };

  // Use Array.reduce() to reduce the input array to a single value
  return inputText.split("").reduce((floor, char) => floor + lookup[char], 0);
};

const firstInput = parseInput("./input.txt");
console.time("start");
console.log(elevator(firstInput));
console.timeEnd("start");
