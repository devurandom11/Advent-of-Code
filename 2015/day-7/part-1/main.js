const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

// Capitalize to avoid keyword collision; Extract name, value, and source(s); Return adjacency list.
const mapInput = (arr) => {
  const mappedArr = arr.map((str) => {
    let capitalStr = "";
    for (let i = 0; i < str.length; i++) {
      capitalStr += str[i].toUpperCase();
    }
    return capitalStr.split(" ");
  });

  const mappedInput = {};
  for (let i = 0; i < mappedArr.length; i++) {
    // Create object with strings
    mappedInput.push({
      originalString: mappedArr[i].join(" "),
      assignment: mappedArr[i][mappedArr[i].indexOf("->") + 1],
      rightVal: mappedArr[i][mappedArr[i].indexOf("->") - 1],
      leftVal: mappedArr[i][mappedArr[i].indexOf("->") - 3],
      operator: mappedArr[i][mappedArr[i].indexOf("->") - 2],
    });

    // Convert to Numbers
    if (!isNaN(mappedInput[i].rightVal)) {
      mappedInput[i].rightVal = Number(mappedInput[i].rightVal);
    }
    if (!isNaN(mappedInput[i].leftVal)) {
      mappedInput[i].leftVal = Number(mappedInput[i].leftVal);
    }
  }
  // Return array of objects
  return mappedInput;
};

// Recursively search for node given adjacency list; Return target node object.
const findWire = (graph, node) => {
  return node;
};

const main = () => {
  const inputArr = parseInput("./input.txt").trimEnd().split("\n");
  const adjacencyList = mapInput(inputArr);
  const resultWire = findWire(adjacencyList, "A");
  const result = resultWire.value();

  return result;
};

// Main program

timer.start();
console.dir(main(), { maxArrayLength: null, depth: null });
timer.end();
