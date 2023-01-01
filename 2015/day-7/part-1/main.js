const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

// Capitalize to avoid keyword collision. Return capitalized array.
const allCaps = (arr) => {
  const capsArr = arr.reduce((acc, line) => {
    acc.push(line.toUpperCase());
    return acc;
  }, []);
  return capsArr;
};

// Extract name, value, and source(s); Return adjacency list.

// Recursively search for node given adjacency list; Return target node object.
const findWire = (graph, node) => {
  return node;
};

const main = () => {
  const inputArr = parseInput("./input.txt").trimEnd().split("\n");
  const capitalizedArray = allCaps(inputArr);
  const adjacencyList = buildGrid(capitalizedArray);
  // const resultWire = findWire(adjacencyList, "A");
  // const result = resultWire.value();

  return adjacencyList;
};

// Main program

timer.start();
console.dir(main(), { maxArrayLength: null, depth: null });
timer.end();
