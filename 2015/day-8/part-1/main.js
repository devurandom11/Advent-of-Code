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
  let memSize = 0;
  arr.map((str, index, arr) => {
    return str;
  });

  return memSize;
};

const main = () => {
  // Test input
  const inputStr = parseInput("./testinput.txt");
  // const inputStr = parseInput("./input.txt");
  const inputArr = inputStr.split("\n");
  const results = [];

  // Get string literal size
  const strLiteral = getLiteralSize(inputArr);

  // Get memory size
  const memSize = getMemSize(inputArr);

  // Return results
  results.push(strLiteral, memSize);
  return results;
};

// Main program
timer.start();
console.log(main());
timer.end();
