// Solution 1
const { parseInput } = require("../../utils/input-parser.js");

// Build starting grid
const buildGrid = () => {
  const y = 1000;
  const x = 1000;
  const grid = [];
  for (let i = 0; i < y; i++) {
    const row = [];
    for (let j = 0; j < x; j++) {
      row.push({
        x: j,
        y: i,
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
  for (let i = coords.x1; i < coords.x2 + 1; i++) {
    for (let j = coords.y1; j < coords.y2 + 1; j++) {
      switch (directions) {
        case "on":
          grid[i][j]["status"] = true;
          break;
        case "off":
          grid[i][j]["status"] = false;
          break;
        case "toggle":
          grid[i][j]["status"] = !grid[j][i]["status"];
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
// const input = "turn on 499,499 through 500,500";
const results = lightEmUp(input);
let count = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    if (results[j][i].status === true) {
      count += 1;
    }
  }
}

// console.table(results, ["x", "y", "status"]);
console.log(count);
