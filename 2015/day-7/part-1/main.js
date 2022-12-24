// Solution 1
const { parseInput } = require("../../utils/input-parser");

// Parse instructions splitting in "->"
const parseInstructions = (str) => {
  const instructions = [];
  const startArr = str.split("\n");

  for (const item of startArr) {
    let leftVals = null;
    let leftOperator = null;
    let operator = null;
    let operatorIndex = null;
    let rightOperator = null;
    const assignment = item.split("->")[1].trim();
    const leftStr = item.split("->")[0].trim();

    if (isNaN(leftStr)) {
      leftVals = leftStr.split(" ");
      for (const val of leftVals) {
        if (
          val === "AND" ||
          val === "NOT" ||
          val === "OR" ||
          val === "RSHIFT" ||
          val === "LSHIFT"
        ) {
          operatorIndex = leftVals.indexOf(val);
          operator = val;
          leftOperator = leftVals[operatorIndex - 1];
          rightOperator = leftVals[operatorIndex + 1];
        }
      }
    } else {
      leftVals = Number(leftStr);
    }

    if (isNaN(leftVals)) {
      instructions.push({
        originalString: item,
        leftVals: leftVals,
        leftOperator: leftOperator,
        operator: operator,
        rightOperator: rightOperator,
        assignment: assignment,
      });
    } else {
      instructions.push({
        originalString: item,
        leftVals: leftVals,
        assignment: assignment,
      });
    }
  }

  return instructions;
};

// Process instructions one at a time
const processInstructions = (arr) => {
  const finalArr = [];
  let formula;
  for (const item of arr) {
    if (!isNaN(item.leftVals)) {
      formula = `${item.assignment} = ${item.leftVals}`;
    } else if (item.leftOperator === undefined) {
      formula = `${item.assignment} = ${item.operator} ${item.rightOperator}`;
    } else {
      formula = `${item.assignment} = ${item.leftOperator} ${item.operator} ${item.rightOperator}`;
    }
    finalArr.push(formula);
  }

  return finalArr;
};

const main = () => {
  const inputStr = parseInput("./input.txt");
  const instructions = parseInstructions(inputStr);
  const results = processInstructions(instructions);
  console.log(results);
};

if (this === this) {
  main();
}
