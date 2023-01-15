const { Timer, parseInput } = require("../../utils/utils.js");
const timer = new Timer();

// Get array[0] = instructions and array[1] = targetWire
const inputArr = parseInput("input.txt", "\n")
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
  if (typeof target === "number") return target;
  let node = { name: target };
  // Find leaf node base case
  if (
    !wires.get(target)["operator"] &&
    (!wires.get(target)["left"] || !wires.get(target)["right"])
  ) {
    if (wires.get(target)["left"]) {
      node.left = buildMap(wires, wires.get(target)["left"]);
    } else {
      node.right = buildMap(wires, wires.get(target)["right"]);
    }
    return node;
  }
  // Handle different operators
  switch (wires.get(target)["operator"]) {
    case "NOT":
      node.operator = "NOT";
      node.right = buildMap(wires, wires.get(target)["right"]);
      break;
    default:
      node.operator = wires.get(target)["operator"];
      node.right = buildMap(wires, wires.get(target)["right"]);
      node.left = buildMap(wires, wires.get(target)["left"]);
      break;
  }
  return node;
};

// const getWire = (wire) => {
//   let { leftVal, operator, rightVal } = wireMap.get(wire);
//   console.log(
//     `Wire: ${wire}\nLeft Value: ${leftVal}\nRight Value: ${rightVal}\nOperator: ${operator}`
//   );
// };
timer.start();
console.log(wires);
console.log(buildMap(wires, "X"));
console.log(buildMap(wires, "Y"));
console.dir(buildMap(wires, "X"), { depth: null });
timer.end();
