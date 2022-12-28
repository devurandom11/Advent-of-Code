// Solution 1
const { parseInput } = require("../../utils/input-parser.js");

// Build starting grid
const buildGrid = () => {
  const y1 = 10000;
  const x1 = 10000;
  return new Uint32Array(x1 * y1);
};

const getCoords = (str) => {
  if (!str) return "ERROR";
  const [x1, y1, x2, y2] = str.match(/\d+/g).map(Number);
  return { x1, y1, x2, y2 };
};

const getStatus = (str) => {
  if (!str) return "ERROR";
  const directions = str.includes("turn")
    ? str.includes("on")
      ? "on"
      : "off"
    : "toggle";
  return directions;
};

const updateLights = (grid, coords, directions) => {
  if (!grid || !coords || !directions) return "ERROR";
  for (let y = coords.x1; y <= coords.x2; y++) {
    for (let x = coords.y1; x <= coords.y2; x++) {
      switch (directions) {
        case "on":
          grid[x * 10000 + y] = 1;
          break;
        case "off":
          grid[x * 10000 + y] = 0;
          break;
        case "toggle":
          grid[x * 10000 + y] = grid[x * 10000 + y] === 1 ? 0 : 1;
          break;
      }
    }
  }
  return grid;
};

const countLights = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === 1) {
      count += 1;
    }
  }
  return count;
};

const lightEmUp = (input) => {
  if (!input) return;
  const inputArr = input.split("\n");
  let grid = buildGrid();
  for (const line of inputArr) {
    const coordinates = getCoords(line);
    const directions = getStatus(line);
    grid = updateLights(grid, coordinates, directions);
  }
  return grid;
};

const input = parseInput("./input.txt");
console.time("start");
const results = lightEmUp(input);
console.log(countLights(results));
console.timeEnd("start");
