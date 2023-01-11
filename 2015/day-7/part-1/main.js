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

class Wire {
  constructor(token) {
    this.name = token.target;
    this.inputs = token.value;
    this.operation = token.instruction;
  }
}

const input = parseInput("./testinput.txt");
const wires = buildWires(input);
