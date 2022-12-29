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
    this.startTime = process.hrtime();
  }

  end() {
    const endTime = process.hrtime(this.startTime);
    const elapsedTime = endTime[0] * 1e9 + endTime[1];
    console.log(
      `Elapsed time: ${(elapsedTime * 1e-6).toFixed(0)} ms\nElapsed time: ${(
        elapsedTime * 1e-9
      ).toFixed(2)} Seconds`
    );
  }
}

module.exports = {
  parseInput,
  pause,
  Timer,
};
