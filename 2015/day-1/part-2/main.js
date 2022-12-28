/* Test Case
) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
*/
const { parseInput, pause } = require("../../utils/utils");

// Solution 2
const elevator = async (inputText) => {
  const lookupTable = { "(": 1, ")": -1 };
  console.log("This program should pause for 1 second...");
  await pause(1000);
  console.log("Now we will pause for 10 seconds");
  await pause(10000);
  console.log("did it work?");
};

const firstInput = parseInput("./input.txt");
const main = async () => {
  console.time("start");
  await elevator(firstInput);
  console.timeEnd("start");
};

main();
