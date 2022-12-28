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

// Timer class
class Timer {
  constructor() {
    this.startTime = null;
  }

  start() {
    this.startTime = Date.now();
  }

  end() {
    const endTime = Date.now();
    const elapsedTime = endTime - this.startTime;
    console.log(`Elapsed time: ${elapsedTime}ms`);
  }
}

module.exports = {
  parseInput,
  pause,
  Timer,
};
