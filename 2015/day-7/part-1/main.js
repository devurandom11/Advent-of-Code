const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

const main = () => {
  const inputArr = parseInput("./input.txt").split("\n");
  const mappedInput = mapInput(inputArr);
  const processedInput = processInput(mappedInput);

  return processedInput;
};

// Takes string input, capitalizes everything, maps values in object. Returns object of mapped values.
const mapInput = (arr) => {
  const mappedArr = arr.map((str) => {
    let capitalStr = "";
    for (let i = 0; i < str.length; i++) {
      capitalStr += str[i].toUpperCase();
    }
    return capitalStr.split(" ");
  });

  const mappedInput = [];
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

// Iterate through array of wire objects and attempt to evaluate instructions. If instructions throw error, move to next object and repeat. When all objects are sucessfully processes, return the values of each wire
const processInput = (arr) => {
  for (const mappedInput of arr) {
    // Process Inputs
    switch (mappedInput.operator) {
      case "AND":
        console.log("AND!");
        break;
      case "OR":
        console.log("OR!");
        break;
      case "NOT":
        console.log("NOT!");
        break;
      case "LSHIFT":
        console.log("LSHIFT!");
        break;
      case "RSHIFT":
        console.log("RSHIT!");
        break;
      default:
        break;
    }
  }
  return arr;
};

const newTest = () => {
  const graph = {
    A: ["B", "C", 135],
    B: ["D"],
    C: ["E", "F"],
    D: [],
    E: [],
    F: [],
  };

  function findInputVertices(graph, node) {
    const inputVertices = [];

    for (const v of Object.keys(graph)) {
      if (graph[v].includes(node)) {
        inputVertices.push(v);
      }
    }

    return inputVertices;
  }

  console.log(findInputVertices(graph, "D"));
};

console.dir(main(), { maxArrayLength: null });
// newTest();
