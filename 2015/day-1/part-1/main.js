/* Test Case
(()) and ()() both result in floor 0.
((( and (()(()( both result in floor 3.
))((((( also results in floor 3.
()) and ))( both result in floor -1 (the first basement level).
))) and )())()) both result in floor -3.
*/
const fs = require("fs");

// Solution 1
const elevator = (inputText) => {
  const inputArray = inputText.split("");
  let floor = 0;
  inputArray.forEach((item) => {
    if (item === "(") {
      floor++;
    } else if (item === ")") {
      floor--;
    } else {
      console.error("There was something unexpected in the input");
    }
  });
  return floor;
};

// Tests
// const tests = ["(())", "()()", "(((", "(()(()(", "))((((("];
// tests.forEach((test)=> {
//   elevator(test);
// });

const firstInput = fs.readFileSync("./input.txt").toString();
console.log(elevator(firstInput));
