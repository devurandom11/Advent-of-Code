const { Timer, parseInput } = require("../../utils/utils");
const timer = new Timer();
const main = () => {
  const inputStr = parseInput("./input.txt");
  const inputArr = inputStr.split("\n");

  // Get string literal size
  const strLiteral = getLiteralSize(inputArr);

  // Get memory size
  const memSize = getMemSize(inputArr);
};

const getLiteralSize = (arr) => {
  let strLiteralSize = 0;
  for (const string of arr) {
    strLiteralSize += string.length;
  }
  return strLiteralSize;
};

const getMemSize = (arr) => {
  let memSize = 0;
  for (const string of arr) {
    for (const char of string) {
      if (char === '"') {
      }
    }
  }
};

timer.start();
console.log(main());
timer.end();
