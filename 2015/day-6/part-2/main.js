const { parseInput } = require("../../utils/input-parser");

const input = parseInput("./input.txt");
// const input = "turn on 0,0 through 1,33\ntoggle14.22 through 33,444\nturn off 0,0 through 999,999";

// Initialize set to store the coordinates of lights that are turned on
const grid = new Set();

// Split input into lines and iterate over them
const lines = input.split("\n");
for (const line of lines) {
  // Parse coordinates and status from line
  const [x1, y1, x2, y2] = line.match(/\d+/g).map(Number);
  const status = line.includes("turn on");

  // Update lights in grid
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      // Calculate coordinates of light
      const coord = `${x},${y}`;
      // Update light status
      if (status) {
        grid.add(coord);
      } else if (grid.has(coord)) {
        grid.delete(coord);
      } else {
        grid.add(coord);
      }
    }
  }
}

console.log(grid.size);
