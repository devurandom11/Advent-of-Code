// Solution 1
const fs = require("fs");

const lightEmUp = (input) => {
  const inputArray = input.split("\n");
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
const input =
  "turn on 0,0 through 999,999\ntoggle 0,0 through 999,0\nturn off 499,499 through 500,500\n";
// const input = fs.readFileSync("./input.txt").toString();

console.log(lightEmUp(input));
