const fs = require("fs");

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

const firstInput = fs.readFileSync("./input.txt").toString();
console.log(elevator(firstInput));
