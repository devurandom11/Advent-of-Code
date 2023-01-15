const { Timer, parseInput } = require("../../utils/utils.js");
const timer = new Timer();

// Get array[0] = instructions and array[1] = targetWire
const inputArr = parseInput("./testinput.txt")
  .trim()
  .toUpperCase()
  .split("\n")
  .map((line) => line.split("->").map((side) => side.trim()))
  .reduce((obj, line) => {
    obj[line[1]] = line[0].split(" ");
    return obj;
  }, {});

const wireMap = new Map();
for (const key in inputArr) {
  let [leftVal, operator, rightVal] = inputArr[key];
  if (leftVal === "NOT") {
    leftVal = undefined;
    operator = "NOT";
    rightVal = inputArr[key][1];
  }
  wireMap.set(key, { leftVal, operator, rightVal });
}

wireMap.forEach((value, key, map) => {
  Object.keys(value).forEach((key) => {
    if (parseInt(value[key])) value[key] = parseInt(value[key]);
  });
});
