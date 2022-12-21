// Solution 1
const fs = require("fs");

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

const updateLights = (grid, coords, directions) => {};

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
// const input = "turn on 0,0 through 999,999\ntoggle 0,0 through 999,0\nturn off 499,499 through 500,500\n";
const input = fs.readFileSync("./input.txt").toString();

const testing = lightEmUp(input);
console.dir(testing);
