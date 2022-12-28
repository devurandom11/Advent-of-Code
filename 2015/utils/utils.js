const fs = require("fs");
const { resolve } = require("path");

// Parse input and return string
const parseInput = (filePath) => {
  const input = fs.readFileSync(filePath, "utf8").toString().trimEnd();
  return input;
};

// JS version of python sleep function... I think
const pause = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

module.exports = {
  parseInput,
  pause,
};
