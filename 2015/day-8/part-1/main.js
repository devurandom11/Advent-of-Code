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
    console.log("String: ", str);
    for (let i = 0; i < str.length; i++) {
      // Check if escape character is found
      if (str[i] === "\\") {
        // Check conditions to know how to process
        switch (str[i + 1]) {
          case "\\":
            // The next character is also an escape characer so we need to add it and skip a step in the loop to not process it again.
            reducedStr += str[i + 1];
            i += 1;
            break;

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
    console.log("Final reduced string: ", reducedStr);
    returnArr.push({
      string: reducedStr.slice(1, reducedStr.length - 1),
      length: reducedStr.slice(1, reducedStr.length - 1).length,
    });
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
