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

// Build map of wires
const wires = new Map();
for (const key in inputArr) {
  let [left, operator, right] = inputArr[key];
  if (left === "NOT") {
    left = undefined;
    operator = "NOT";
    right = inputArr[key][1];
  }
  wires.set(key, { left, operator, right });
}

// Convert values to numbers
wires.forEach((value) => {
  Object.keys(value).forEach((key) => {
    if (parseInt(value[key])) value[key] = parseInt(value[key]);
  });
});

const buildMap = (wires, target) => {
  let node = { name: target };
  // Find leaf node base case
  if (
    !wires.get(target)["operator"] &&
    (!wires.get(target)["left"] || !wires.get(target)["right"])
  ) {
    if (wires.get(target)["left"]) {
      node.left = wires.get(target)["left"];
    } else {
      node.right = wires.get(target)["right"];
    }
    return node;
  }

  // Handle different operators
  switch (wires.get(target)["operator"]) {
    case "NOT":
      console.log("NOT");
      break;
    case "OR":
      console.log("OR");
      break;
    case "AND":
      console.log("AND");
      break;
    case "LSHIFT":
      console.log("LSHIFT");
      break;
    case "RSHIFT":
      console.log("RSHIFT");
      break;
    default:
      console.log("SOME ERROR OCCURRED");
      break;
  }

  return "ERROR";
};

// const getWire = (wire) => {
//   let { leftVal, operator, rightVal } = wireMap.get(wire);
//   console.log(
//     `Wire: ${wire}\nLeft Value: ${leftVal}\nRight Value: ${rightVal}\nOperator: ${operator}`
//   );
// };

console.log(wires);
console.log(buildMap(wires, "I"));
