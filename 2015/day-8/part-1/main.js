const { Timer, parseInput } = require("../../utils/utils");
const timer = new Timer();

// Return full string length
const getLiteralSize = (arr) => {
  const fullString = [];
  arr.map((string) => {
    const str = {};
    str[string] = string.length;
    fullString.push(str);
  });
  return fullString;
};

// Parse for mem size
const getMemSize = (arr) => {
  const returnArr = [];
  arr.map((str) => {
    let reducedStr = "";
    for (let i = 0; i < str.length; i++) {
      // Check if escape character is found
      if (str[i] === "\\" && str[i + 1] === "\\") {
        reducedStr += "\\";
        i += 1;
        continue;
      } else if (str[i] === "\\" && str[i + 1] !== "\\") {
        // Check conditions to know how to process
        switch (str[i + 1]) {
          case "x":
            // Process hex and skip next 3 abcde\x27abcde
            const hex = `0x${str[i + 2]}${str[i + 3]}`;
            reducedStr += String.fromCharCode(Number(hex));
            i += 3;
            // console.log;
            break;
        }
      } else reducedStr += str[i];
    }
    const length = reducedStr.slice(1, reducedStr.length - 1).length;
    let objreturn = {};
    objreturn[str] = length;
    returnArr.push(objreturn);
  });
  return returnArr;
};

const main = () => {
  // Test input
  const inputStr = parseInput("./testinput.txt");
  // Main input
  // const inputStr = parseInput("./input.txt");
  const inputArr = inputStr
    .trim()
    .split("\n")
    .map((str) => str.trim());

  // Get string literal size
  const strLiteral = getLiteralSize(inputArr);
  // Get memory size
  const memSize = getMemSize(inputArr);
  // Return results
  const totalLength = strLiteral.reduce((total, str) => {}, 0);
};

// Main program
timer.start();
console.log(main());
timer.end();
