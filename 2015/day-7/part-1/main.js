const { parseInput, Timer } = require("../../utils/utils");

const inputArr = parseInput("./input.txt").trim().split("\n");

const tokens = inputArr.map((line) => {
  const parts = line.trim().split(" ");
  const isAssignment = parts.length === 3;
  const isUnary = parts.length === 4;
  const isBinary = parts.length === 5;
  return isAssignment
    ? { value: parts[0], instruction: parts[1], target: parts[2] }
    : isUnary
    ? { value: parts[1], instruction: parts[0], target: parts[3] }
    : isBinary
    ? { value: [parts[0], parts[2]], instruction: parts[1], target: parts[4] }
    : console.error(`Invalid instruction: ${line}`);
});

// 16-bit version of bitwise operations
const AND = (a, b) => a & b & 0xffff;
const OR = (a, b) => a | (b & 0xffff);
const LSHIFT = (a, b) => (a << b) & 0xffff;
const RSHIFT = (a, b) => (a >> b) & 0xffff;
const NOT = (a) => ~a & 0xffff;
const ASSIGN = (a) => a;

// Test
wires["x"] = ASSIGN(123);
wires["y"] = ASSIGN(456);
wires["d"] = AND(wires["x"], wires["y"]);
wires["e"] = OR(wires["x"], wires["y"]);
wires["f"] = LSHIFT(wires["x"], 2);
wires["g"] = RSHIFT(wires["y"], 2);
wires["h"] = NOT(wires["x"]);
wires["i"] = NOT(wires["y"]);
console.log(wires);
