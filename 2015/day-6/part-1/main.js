// Solution 1
const fs = require("fs");

const lightEmUp = (input) => {
  let grid = [];
  let x, y;

  for (let i = 0; i < 1000; i++) {
    for (let r = 0; r < 1000; r++) {
      x = r;
      y = i;
      grid.push([x, y]);
    }
  }
  return grid;
};

const input = "test";
console.dir(lightEmUp(input), { maxArrayLength: null });
