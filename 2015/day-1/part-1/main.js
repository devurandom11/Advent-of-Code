const { parseInput } = require("../../utils/input-parser");

// Solution 1
const elevator = (inputText) => {
  const inputArray = inputText.split("");
  let floor = 0;
  for (const item of inputArray) {
    if (item === "(") {
      floor++;
    } else floor--;
  }

  return floor;
};

const firstInput = parseInput("./input.txt");
console.log(elevator(firstInput));
