const fs = require("fs");

const calcTotalHousesWithPresents = (input) => {
  // Set starting point and add to both sets
  let santaX = 0;
  let santaY = 0;
  let roboX = 0;
  let roboY = 0;
  const santaSet = new Set();
  const roboSet = new Set();
  const finalSet = new Set();
  const inputArray = input.split("");
  const santaArray = [];
  const roboArray = [];
  santaSet.add(`${santaX}, ${santaY}`);
  roboSet.add(`${roboX}, ${roboY}`);

  // Split array
  for (let i = 0; i < inputArray.length; i++) {
    if (i === 0) {
      santaArray.push(inputArray[i]);
    } else if (i % 2 === 0) {
      santaArray.push(inputArray[i]);
    } else roboArray.push(inputArray[i]);
  }

  // Process Santa
  for (const item of santaArray) {
    switch (item) {
      case "<":
        santaX -= 1;
        break;

      case ">":
        santaX += 1;
        break;

      case "^":
        santaY += 1;
        break;

      case "v":
        santaY -= 1;
        break;
    }
    santaSet.add(`${santaX}, ${santaY}`);
  }
  // Process Robosanta
  for (const item of roboArray) {
    switch (item) {
      case "<":
        roboX -= 1;
        break;

      case ">":
        roboX += 1;
        break;

      case "^":
        roboY += 1;
        break;

      case "v":
        roboY -= 1;
        break;
    }
    roboSet.add(`${roboX}, ${roboY}`);
  }

  for (const item of santaSet) {
    finalSet.add(item);
  }
  for (const item of roboSet) {
    finalSet.add(item);
  }

  return finalSet.size;
};

const userInput = fs.readFileSync("./input.txt").toString();
console.log(calcTotalHousesWithPresents(userInput));
