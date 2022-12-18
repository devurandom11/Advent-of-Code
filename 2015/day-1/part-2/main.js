/* Test Case
) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
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
