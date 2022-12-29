//Solution 2
const { parseInput, Timer } = require("../../utils/utils");
const timer = new Timer();

// Build starting grid
const buildGrid = () => {
  const y1 = 50000;
  const x1 = 50000;
  return new Uint8Array(x1 * y1);
};

const getCoords = (str) => {
  if (!str) return "ERROR";
  const [x1, y1, x2, y2] = str.match(/\d+/g).map(Number);
  return { x1, y1, x2, y2 };
};

const getStatus = (str) => {
  if (!str) return "ERROR";
  return str.includes("turn on")
    ? "on"
    : str.includes("turn off")
    ? "off"
    : "toggle";
};

const updateLights = (grid, coords, directions) => {
  if (!grid || !coords || !directions) return "ERROR";
  for (let y = coords.x1; y <= coords.x2; y++) {
    for (let x = coords.y1; x <= coords.y2; x++) {
      const index = x * 50000 + y;
      grid[index] =
        directions === "on"
          ? grid[index] + 1
          : directions === "off"
          ? Math.max(grid[index] - 1, 0)
          : grid[index] + 2;
    }
  }
  return grid;
};

const countLights = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    count += grid[i];
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
timer.start();
const results = lightEmUp(input);
console.log(countLights(results));
timer.end();
console.log(`Grid size: ${(50000 * 50000).toLocaleString("en-US")}`);
