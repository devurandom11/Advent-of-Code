// Solution 1
const { parseInput } = require("../../utils/input-parser.js");

// Build starting grid
const buildGrid = () => {
  const rownum = 1000;
  const colnum = 1000;
  const grid = [];
  for (let i = 0; i < rownum; i++) {
    const row = [];
    for (let j = 0; j < colnum; j++) {
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
  if (str === null || str === undefined || str === "") return;
  const coords = {};
  coords["x1"] = parseInt(
    str.split("through")[0].split(",")[0].split(" ")[
      str.split("through")[0].split(",")[0].split(" ").length - 1
    ]
  );
  coords["y1"] = parseInt(str.split("through")[0].split(",")[1]);
  coords["x2"] = parseInt(str.split("through")[1].split(",")[0]);
  coords["y2"] = parseInt(str.split("through")[1].split(",")[1]);
  return coords;
};

const getDirections = (str) => {
  const directions = str.includes("turn")
    ? str.includes("on")
      ? "on"
      : "off"
    : "toggle";
  return directions;
};

const updateLights = (grid, coords, directions) => {
  for (let i = coords.x1; i <= coords.x2; i++) {
    for (let j = coords.y1; j <= coords.y2; j++) {
      switch (directions) {
        case "on":
          grid[i][j].status = true;
          break;
        case "off":
          grid[i][j].status = false;
          break;
        case "toggle":
          grid[i][j].status = !grid[i][j].status;
          break;
      }
    }
  }
  return grid;
};

const lightEmUp = (input) => {
  const inputArray = input.split("\n");
  let grid = buildGrid();
  for (const line of inputArray) {
    const coordinates = getCoords(line);
    const directions = getDirections(line);
    grid = updateLights(grid, coordinates, directions);
  }
  return grid;
};

const input = parseInput("./input.txt");
