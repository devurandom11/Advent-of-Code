/* Test Case
) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
*/
const { parseInput, pause, Timer } = require("../../utils/utils");
const timer = new Timer();

// Solution 2
const elevator = async (inputText) => {
  const lookupTable = { "(": 1, ")": -1 };

  return inputText.split("").reduce((floor, step) => {
    return (floor += lookupTable[step]);
  }, 0);
};

// Async main function for debugging
const main = async () => {
  const firstInput = parseInput("./input.txt");
  timer.start();
  console.log(await elevator(firstInput));
  timer.end();
};

main();
