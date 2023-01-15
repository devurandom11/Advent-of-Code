const { getRandomValues } = require("crypto");
const { Timer, parseInput } = require("../../utils/utils.js");
const { validateHeaderName } = require("http");
const timer = new Timer();

// Get array[0] = instructions and array[1] = targetWire
const inputArr = parseInput("./input.txt")
  .trim()
  .toUpperCase()
  .split("\n")
  .map((line) => line.split("->").map((side) => side.trim()))
  .reduce((obj, line) => {
    obj[line[1]] = line[0].split(" ");
    return obj;
  }, {});

const wireMap = {};

for (const key in inputArr) {
  let [leftVal, operator, rightVal] = inputArr[key];
  if (leftVal === "NOT") {
    leftVal = undefined;
    operator = "NOT";
    rightVal = inputArr[key][1];
  } else if (!isNaN(leftVal)) {
    leftVal = parseInt(leftVal);
  }
  wireMap[key] = { leftVal, operator, rightVal };
}

// console.log(inputArr);
console.log(wireMap);
