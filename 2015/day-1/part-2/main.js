/* Test Case
) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
*/
const fs = require("fs");

// Solution 2
const elevator = (inputText) => {
  const inputArray = inputText.split("");
  let floor = 0;
  let steps = 0;

  for (const item in inputArray) {
    steps++;
    if (floor >= 0) {
      if (inputArray[item] == "(") {
        floor++;
      } else floor--;
    } else return steps;
  }
};

// Tests
// const tests = "((())())))(((((((";
// console.log(elevator(tests));

const firstInput = fs.readFileSync("./input.txt").toString();
console.log(elevator(firstInput));
