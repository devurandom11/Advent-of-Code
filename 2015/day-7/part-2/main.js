const { pause, parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

// Define wire
class wire {
  constructor(name, source) {
    this.name = name;
    this.source = source;
    this.destinations = [];
  }

  addDestination(destination) {
    this.destinations.push(destination);
  }

  getValue(wiringDiagram) {
    const source = this.source;
    let sourceVal;
  }
}

// Build the wiring diagram
const buildDiagram = (arr) => {};

// Main
const main = () => {
  let result = -1;
  const inputArr = parseInput("./input.txt").trimEnd().split("\n");

  return result;
};

const result = main();
console.log(`\nThe result is: ${result}\n`);
