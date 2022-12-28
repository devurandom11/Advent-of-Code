// Solution 2
const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

const calcTotalHousesWithPresents = (input) => {
  // Set starting point
  let santaX = 0;
  let santaY = 0;
  let roboX = 0;
  let roboY = 0;
  const visitedHouses = new Set();

  visitedHouses.add(`${santaX}, ${santaY}`);

  for (let i = 0; i < input.length; i++) {
    let x, y;

    // Determine which Santa to use based on iteration
    if (i % 2 === 0) {
      x = santaX;
      y = santaY;
    } else {
      x = roboX;
      y = roboY;
    }

    switch (input[i]) {
      case "<":
        x -= 1;
        break;

      case ">":
        x += 1;
        break;

      case "^":
        y += 1;
        break;

      case "v":
        y -= 1;
        break;
    }

    // Update Santa's position
    if (i % 2 === 0) {
      santaX = x;
      santaY = y;
    } else {
      roboX = x;
      roboY = y;
    }

    visitedHouses.add(`${x}, ${y}`);
  }

  return visitedHouses.size;
};

timer.start();
const firstInput = parseInput("./input.txt");
console.log(calcTotalHousesWithPresents(firstInput));
timer.end();
