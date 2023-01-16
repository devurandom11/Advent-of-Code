const { Timer, parseInput } = require("../../utils/utils.js");
const timer = new Timer();

// Get array[0] = instructions and array[1] = targetWire
const inputArr = parseInput("testinput.txt", "\n")
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

  // Case with all values filled
  if (left && operator && right) {
    wires.set(key, { left, operator, right });
    continue;
  }

  // Case with NOT
  if (left === "NOT") {
    left = null;
    operator = "NOT";
    right = inputArr[key][1];
    wires.set(key, { left, operator, right });
    continue;
  }

  // Case for assignment
  left = inputArr[key][0];
  operator = "ASSIGN";
  right = undefined;
  wires.set(key, { left, operator, right });
}

// Convert string to number
wires.forEach((key) => {
  for (let value in key) {
    if (parseInt(key[value]) || key[value] === "0") {
      key[value] = parseInt(key[value]);
    }
  }
});

const buildTree = (wires, targetWire) => {
  if (!wires.get(targetWire)) {
    return;
  }
  // Base Case
  if (
    !isNaN(wires.get(targetWire).left) &&
    wires.get(targetWire).operator === "ASSIGN"
  ) {
    return wires.get(targetWire).left;
  }

  //   // Recursive Case
  switch (wires.get(targetWire).operator) {
    case "ASSIGN":
      return buildTree(wires, wires.get(targetWire).left);
    case "NOT":
      return ~buildTree(wires, wires.get(targetWire).right);
    case "AND":
      return (
        buildTree(wires, wires.get(targetWire).left) &
        buildTree(wires, wires.get(targetWire).right)
      );
    case "OR":
      return (
        buildTree(wires, wires.get(targetWire).left) |
        buildTree(wires, wires.get(targetWire).right)
      );
    case "LSHIFT":
      return (
        buildTree(wires, wires.get(targetWire).left) <<
        buildTree(wires, wires.get(targetWire).right)
      );
    case "RSHIFT":
      return (
        buildTree(wires, wires.get(targetWire).left) >>
        buildTree(wires, wires.get(targetWire).right)
      );
  }
};

// console.log(wires);
// trees["X"] = buildTree(wires, "X");
// trees["Y"] = buildTree(wires, "Y");
// trees["D"] = buildTree(wires, "D");
// trees["E"] = buildTree(wires, "E");
// trees["F"] = buildTree(wires, "F");
// trees["G"] = buildTree(wires, "G");
// trees["H"] = buildTree(wires, "H");
// trees["I"] = buildTree(wires, "I");

console.log(buildTree(wires, "X"));
console.log(buildTree(wires, "Y"));
console.log(buildTree(wires, "D"));
console.log(buildTree(wires, "E"));
console.log(buildTree(wires, "F"));
console.log(buildTree(wires, "G"));
console.log(buildTree(wires, "H"));
console.log(buildTree(wires, "I"));
