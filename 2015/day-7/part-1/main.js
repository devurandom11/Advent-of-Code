const { Timer, parseInput } = require("../../utils/utils.js");
const timer = new Timer();

// Get array[0] = instructions and array[1] = targetWire
const inputArr = parseInput("./testinput.txt")
  .trim()
  .split("\n")
  .map((line) => line.split("->").map((side) => side.trim()));
