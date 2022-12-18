const fs = require("fs");

const calcTotalHousesWithPresents = (input) => {
  let result = userInput.split("");
  return result;
};

const userInput = fs.readFileSync("./input.txt").toString();
console.log(calcTotalHousesWithPresents(userInput));

// For example:

// > delivers presents to 2 houses: one at the starting location, and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.
// To play, please identify yourself via one of these services:
