const { pause, parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

// Define wire
class wire {
  constructor(name, source) {
    this.name = name;
    this.source = source;
    this.value = null;
  }

  getValue(wiringDiagram) {}
}

// Define Wiring Diagram (Full board)
class wiringDiagram {
  constructor() {
    this.wires = {};
  }
}
// Main
const main = () => {
  let result = -1;
  const inputArr = parseInput("./input.txt").trimEnd().split("\n");

  return result;
};

const result = main();
console.log(`\nThe result is: ${result}\n`);
