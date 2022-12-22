// Solution 1
const { parseInput } = require("../../utils/input-parser.js");

// Build starting grid
const buildGrid = () => {
  const y1 = 1000;
  const x1 = 1000;
  const grid = [];
  for (let x = 0; x < x1; x++) {
    const row = [];
    for (let y = 0; y < y1; y++) {
      row.push({
        status: false,
      });
    }
    grid.push(row);
  }
  return grid;
};

const getCoords = (str) => {
  if (!str) return "ERROR";
  const [x1, y1, x2, y2] = str.match(/\d+/g).map(Number);
  return { x1, y1, x2, y2 };
};

// YIKES!
// const getCoords = (str) => {
// if (!str) return;
// const coords = {};
// coords["x1"] = parseInt(
//   str.split("through")[0].split(",")[0].split(" ")[
//     str.split("through")[0].split(",")[0].split(" ").length - 1
//   ]
// );
// coords["y1"] = parseInt(str.split("through")[0].split(",")[1]);
// coords["x2"] = parseInt(str.split("through")[1].split(",")[0]);
// coords["y2"] = parseInt(str.split("through")[1].split(",")[1]);
// return coords;
// };

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
  for (let y = coords.x1; y < coords.x2 + 1; y++) {
    for (let x = coords.y1; x < coords.y2 + 1; x++) {
      switch (directions) {
        case "on":
          grid[x][y].status = true;
          break;
        case "off":
          grid[x][y].status = false;
          break;
        case "toggle":
          grid[x][y].status = !grid[x][y].status;
          break;
        default:
          return "ERROR";
      }
    }
  }
  return grid;
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
const results = lightEmUp(input);
let count = 0;
for (let x = 0; x < 1000; x++) {
  for (let y = 0; y < 1000; y++) {
    if (results[x][y].status) {
      count += 1;
    }
  }
}

console.log(count);
