// Solution 1
const fs = require("fs");

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

const userInput = fs.readFileSync("./input.txt").toString();
console.log(calcTotalHousesWithPresents(userInput));
