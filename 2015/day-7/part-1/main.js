const { parseInput } = require("../../utils/utils");

const buildWires = (input) => {
  const wires = {};
  input
    .toUpperCase()
    .split("\n")
    .map((line) => line.split(" -> "))
    .forEach((wire) => {
      wires[wire[1]] = wire[0].split(" ");
    });
  return wires;
};
// 16-bit version of bitwise operations
const AND = (a, b) => a & b & 0xffff;
const OR = (a, b) => a | (b & 0xffff);
const LSHIFT = (a, b) => (a << b) & 0xffff;
const RSHIFT = (a, b) => (a >> b) & 0xffff;
const NOT = (a) => ~a & 0xffff;
const ASSIGN = (a) => a;

const solve = (wire) => {
  const wiringDiagram = {};
  switch (wires[wire].length) {
    case 1: // Assignment
      if (wires[wire][0].match(/[0-9]/)) {
        return ASSIGN(parseInt(wires[wire][0]));
      } else return solve(wires[wire][0]);
    case 2: // Not or Single operation
      break;
    case 3: // Binary operation
      break;
    default: // Error
      console.error("Invalid input");
      break;
  }
};

const input = parseInput("./testinput.txt");
const wires = buildWires(input);

console.log(wires);

// Tests
console.log(solve("X"));
console.log(solve("Y"));
console.log(solve("D"));
console.log(solve("E"));
console.log(solve("F"));
console.log(solve("G"));
console.log(solve("H"));
console.log(solve("I"));
