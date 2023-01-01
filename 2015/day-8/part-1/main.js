const { Timer, pause, parseInput } = require("../../utils/utils");
const timer = new Timer();

const getLiteralSize = (arr) => {
  let strLiteralSize = 0;
  for (const string of arr) {
    strLiteralSize += string.length;
  }
  return strLiteralSize;
};

const getMemSize = (arr) => {
  arr.map((str) => {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  });
};

const main = () => {
  // Test input
  const inputStr = parseInput("./testinput.txt");
  // const inputStr = parseInput("./input.txt");
  const inputArr = inputStr.split("\n").map((str) => str.trimEnd());
  const results = {};
  // Get string literal size
  const strLiteral = getLiteralSize(inputArr);
  results["full"] = strLiteral;
  // Get memory size
  const memSize = getMemSize(inputArr);
  results["mem"] = memSize;
  // Return results
  return results;
};

// Main program
timer.start();
console.log(main());
timer.end();
