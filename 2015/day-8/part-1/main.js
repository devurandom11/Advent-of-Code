const { Timer, parseInput } = require("../../utils/utils");
const timer = new Timer();

// Return full string length
const getLiteralSize = (arr) => {
  return arr.reduce((length, str) => {
    return (length += str.length);
  }, 0);
};

// Parse for mem size
const getMemSize = (arr) => {
  const returnArr = [];
  arr.map((str) => {
    let reducedStr = "";
    for (let i = 0; i < str.length; i++) {
      console.log("original string: ", str);

      switch (str[i]) {
        case "\\":
          console.log("escape sequence found", str[i]);
          console.log("peeking...", str[i - 1], str[i], str[i + 1]);
          break;
        case "\\x":
          console.log("escape sequence found", str[i]);
          console.log("peeking...", str[i], str[i + 1], str[i + 2]);
          break;
        case "\\\\":
          console.log("escape sequence found", str[i]);
          console.lg(
            "peeking...",
            str[i - 2],
            str[i - 1],
            str[i],
            str[i + 1],
            str[i + 2]
          );
          break;
        default:
          console.log("no escape sequence found", str[i]);
          break;
      }
    }
    returnArr.push(reducedStr);
  });
  return returnArr;
};

const main = () => {
  // Test input
  const inputStr = parseInput("./testinput.txt");
  // Main input
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
