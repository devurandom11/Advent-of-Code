// Solution 1
const { parseInput } = require("../../utils/input-parser");

// Parse instructions splitting in "->"
const parseInstructions = (str) => {
  const instructions = [];
  const startArr = str.split("\n");

  for (const item of startArr) {
    const assignment = item.split("->")[1].trim();
    const leftStr = item.split("->")[0].trim();
    let leftVal = Number(leftStr);

    if (isNaN(leftVal)) {
      leftVal = leftStr.split(" ");
    } else {
      leftVal = Number(leftStr);
    }
    instructions.push({
      leftVal: leftVal,
      assignment: assignment,
    });
  }

  return instructions;
};

// Process instructions one at a time
const processInstructions = (arr) => {
  const finalArr = [];

  for (const item of arr) {
    finalArr.push(item);
  }

  return finalArr;
};

const main = () => {
  const inputStr = parseInput("./input.txt");
  const instructions = parseInstructions(inputStr);
  const result = processInstructions(instructions);
  console.log(result);
};

if (this === this) {
  main();
}
