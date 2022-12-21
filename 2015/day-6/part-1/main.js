// Solution 1
const { dir } = require("console");
const fs = require("fs");

const buildGrid = () => {
  const rownum = 1000;
  const colnum = 1000;
  const grid = [];
  for (let i = 0; i < rownum; i++) {
    const row = [];
    for (let j = 0; j < colnum; j++) {
      row.push({
        row: i,
        col: j,
        status: "off",
      });
    }
    grid.push(row);
  }
  return grid;
};

const getCoords = (arr) => {
  return arr;
};

const getDirections = (arr) => {
  return arr;
};

const buildNewGrid = (grid, coords, directions) => {
  const newGrid = [];
  return newGrid;
};

const lightEmUp = (input) => {
  const inputArray = input.split("\n");
  const grid = buildGrid();
  const coordinates = getCoords(inputArray);
  const directions = getDirections(inputArray);
  const newGrid = buildNewGrid(grid, coordinates, directions);

  return newGrid;
};
const input =
  "turn on 0,0 through 999,999\ntoggle 0,0 through 999,0\nturn off 499,499 through 500,500\n";
// const input = fs.readFileSync("./input.txt").toString();

console.log(lightEmUp(input));
