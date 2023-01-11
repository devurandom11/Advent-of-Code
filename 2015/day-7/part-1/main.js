const { parseInput } = require("../../utils/utils");

const input = parseInput("./testinput.txt").toUpperCase();
const inputArr = input.trim().split("\n");

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

class Wire {
  constructor(name) {
    this.name = name;
    this.inputs = [];
    this.operation = null;
  }

  addInput(input) {
    this.inputs.push(input);
  }

  setOperation(operation) {
    this.operation = operation;
  }

  getValue() {
    switch (this.operation) {
      case "AND":
        return AND(this.inputs[0].getValue(), this.inputs[1].getValue());
      case "OR":
        return OR(this.inputs[0].getValue(), this.inputs[1].getValue());
      case "LSHIFT":
        return LSHIFT(this.inputs[0].getValue(), this.inputs[1].getValue());
      case "RSHIFT":
        return RSHIFT(this.inputs[0].getValue(), this.inputs[1].getValue());
      case "NOT":
        return NOT(this.inputs[0].getValue());
      case "ASSIGN":
        return ASSIGN(this.inputs[0].getValue());
      default:
        console.error(`Invalid operation: ${this.operation}`);
    }
  }
}

console.log(tokens);
