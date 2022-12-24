const { parseInput } = require("../../utils/input-parser");

const inputStr = parseInput("./input.txt");
const inputArr = inputStr.split("\n");
console.dir(inputArr, { maxArrayLength: null });
console.dir(this);
