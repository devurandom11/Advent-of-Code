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
function createAdjacencyList(input) {
  // Initialize the adjacency list as an empty object
  console.log("input: ", input);
  const adjacencyList = {};

  // Iterate through each line of the input
  for (const line of input) {
    console.log("line: ", line);
    // Split the line into an array of words
    const words = line.split(" ");

    // Initialize the source wire, value, and operator
    let source = null;
    let value = null;
    let operator = null;

    // Iterate through each word in the line
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      console.log("word:", word);
      // Check if the word is an operator
      if (
        word === "AND" ||
        word === "OR" ||
        word === "LSHIFT" ||
        word === "RSHIFT" ||
        word === "NOT"
      ) {
        // Assign the operator and value (if any)
        operator = word;
        value = words[i + 1];
      } else if (word === "->") {
        // The next word is the destination wire
        const destination = words[i + 1];

        // Check if the source wire is already in the adjacency list
        if (!adjacencyList[source]) {
          // If not, initialize the source wire in the adjacency list
          adjacencyList[source] = [
            { value: value || null, operator: operator || null },
          ];
        }

        // Add the connection to the adjacency list
        adjacencyList[destination] = [{ value: null, operator: null }];
        adjacencyList[destination].push({
          [source]: { value: value || null, operator: operator || null },
        });
      } else {
        // Assign the word as the source wire
        source = word;
      }
    }
  }
  console.log("adjacencyList:", adjacencyList);
  // Return the adjacency list
  return adjacencyList;
}
// Recursively search for node given adjacency list; Return target node object.
const findWire = (adjacencyList, target) => {
  console.log("adjacencyList:", adjacencyList);
  // Initialize a queue with the target wire
  const queue = [target];

  // Initialize a visited set to keep track of which wires have been visited
  const visited = new Set();

  // Initialize a map to store the values of the wires
  const values = new Map();

  // While there are still wires in the queue
  while (queue.length > 0) {
    // Get the next wire from the queue
    const wire = queue.shift();
    console.log("wire:", wire);

    // If the wire has already been visited, skip it
    if (visited.has(wire)) continue;

    // Mark the wire as visited
    visited.add(wire);

    // Get the connections for the wire
    const connections = adjacencyList[wire];
    console.log("connections:", connections);
    // If the wire has no connections, skip it
    if (!connections) continue;

    // Iterate through each connection
    for (const connection of connections) {
      // Get the destination wire
      const destination = Object.keys(connection)[0];
      console.log("destination:", destination); // <-- added
      console.log("connection[destination]:", connection[destination]);
      // Get the value and operator for the connection
      if (connection[destination]) {
        const { value, operator } = connection[destination];
        if (value) {
          values.set(destination, value);
        } else {
          // If the destination wire has no value, it must depend on other wires
          // Add it to the queue to be evaluated later
          queue.push(destination);
          // If the connection has an operator, add it to the values map
          if (operator) {
            values.set(destination, operator);
          }
        }
      }
      // If the destination wire has a value, add it to the values map
    }
  }

  // Initialize a stack to store the wires that need to be evaluated
  const stack = [];

  // Push the target wire onto the stack
  stack.push(target);

  // While there are still wires on the stack
  while (stack.length > 0) {
    // Get the next wire from the stack
    const wire = stack.pop();

    // Get the value for the wire
    let wireValue = values.get(wire);

    // If the value is an operator, evaluate it
    if (wireValue === "AND") {
      // Pop the next two values from the stack and apply the AND operator
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      wireValue = operand1 & operand2;
    } else if (wireValue === "OR") {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      wireValue = operand1 | operand2;
    } else if (wireValue === "LSHIFT") {
      // Pop the next two values from the stack and apply the left shift operator
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      wireValue = operand1 << operand2;
    } else if (wireValue === "RSHIFT") {
      // Pop the next two values from the stack and apply the right shift operator
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      wireValue = operand1 >> operand2;
    } else if (wireValue === "NOT") {
      // Pop the next value from the stack and apply the NOT operator
      const operand = stack.pop();
      wireValue = ~operand;
    }

    // Push the wire value onto the stack
    stack.push(wireValue);
  }

  // The final value on the stack is the result
  return stack[0];
};

const main = () => {
  const inputArr = `123 -> x
  456 -> y
  x AND y -> d
  x OR y -> e
  x LSHIFT 2 -> f
  y RSHIFT 2 -> g
  NOT x -> h
  NOT y -> i`.split("\n");
  const capitalizedArray = allCaps(inputArr);
  const adjacencyList = createAdjacencyList(capitalizedArray);
  const resultWire = findWire(adjacencyList, "H");
  return resultWire;
};

// Main program

timer.start();
console.dir(main(), { maxArrayLength: null, depth: null });
timer.end();
