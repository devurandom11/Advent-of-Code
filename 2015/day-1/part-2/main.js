const { parseInput, pause, Timer } = require("../../utils/utils");
const timer = new Timer();

// Solution 2
const elevator = (str) => {
  let floor = 0;
  let steps = 0;
  const totalSteps = str.split("").reduce((steps, direction) => {
    if (floor < 0) return steps;
    if (direction === "(") floor += 1;
    else floor -= 1;
    return steps + 1;
  }, 0);
  return totalSteps;
};

const main = () => {
  // Test
  // const inputStr = parseInput("./testinput.txt");
  const inputStr = parseInput("./input.txt");
  timer.start();
  const result = elevator(inputStr);
  console.log(`\nThe result is: ${result}\n`);
  timer.end();
};

main();
