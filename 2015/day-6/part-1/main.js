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
  for (let i = coords["y1"]; i <= coords["y2"]; i++) {
    for (let j = coords["x1"]; j <= coords["x2"]; j++) {
      switch (directions) {
        case "on":
          grid[j][i]["status"] = true;
          break;
        case "off":
          grid[j][i]["status"] = false;
          break;
        case "toggle":
          grid[j][i]["status"] = !grid[j][i]["status"];
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
    try {
      const coordinates = getCoords(line);
      const directions = getStatus(line);
      grid = updateLights(grid, coordinates, directions);
    } catch (error) {
      console.log("ERROR: ", error);
    }
    return grid;
  }
};
const input = parseInput("./input.txt");
console.log(lightEmUp(input));
