// Solution 1
const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

const calcTotalHousesWithPresents = (input) => {
  // Set starting point and add to set
  let xcoord = 0;
  let ycoord = 0;
  const visitedSet = new Set();
  const inputArray = input.split("");
  visitedSet.add(`${xcoord}, ${ycoord}`);

  // Update set with each coordinate
  for (const item of inputArray) {
    switch (item) {
      case "<":
        xcoord -= 1;
        break;

      case ">":
        xcoord += 1;
        break;

      case "^":
        ycoord += 1;
        break;

      case "v":
        ycoord -= 1;
        break;
    }
    visitedSet.add(`${xcoord}, ${ycoord}`);
  }

  let result = visitedSet.size;
  return result;
};

timer.start();
const firstInput = parseInput("./input.txt");
console.log(calcTotalHousesWithPresents(firstInput));
timer.end();
