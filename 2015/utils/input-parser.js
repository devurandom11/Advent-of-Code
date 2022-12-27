// File: input-parser.js
const fs = require("fs");

function parseInput(filePath) {
  const input = fs.readFileSync(filePath, "utf8").toString().trimEnd();
  return input;
}

module.exports = {
  parseInput,
};
