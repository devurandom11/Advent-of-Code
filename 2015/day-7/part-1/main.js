const { parseInput } = require("../../utils/input-parser");

const main = () => {
  const inputArr = parseInput("./input.txt").split("\n");
  const mappedInput = mapInput(inputArr);
  const processedInput = processInput(mappedInput);
  for (const item of processedInput) {
    if (!isNaN(item.leftVal)) {
      console.log(item);
    }
  }
  return processedInput;
};

// Takes string input, capitalizes everything, maps values in object. Returns object of mapped values.
const mapInput = (arr) => {
  const mappedArr = arr.map((str) => {
    let capitalStr = "";
    for (let i = 0; i < str.length; i++) {
      capitalStr += str[i].toUpperCase();
    }
    return capitalStr.split(" ");
  });

  const mappedInput = [];
  for (let i = 0; i < mappedArr.length; i++) {
    mappedInput.push({
      assignment: mappedArr[i][mappedArr[i].indexOf("->") + 1],
      rightVal: mappedArr[i][mappedArr[i].indexOf("->") - 1],
      leftVal: mappedArr[i][mappedArr[i].indexOf("->") - 3],
      operator: mappedArr[i][mappedArr[i].indexOf("->") - 2],
    });
    if (!isNaN(mappedInput[i].rightVal)) {
      mappedInput[i].rightVal = Number(mappedInput[i].rightVal);
    }
    if (!isNaN(mappedInput[i].leftVal)) {
      mappedInput[i].leftVal = Number(mappedInput[i].leftVal);
    }
  }
  return mappedInput;
};

// Iterate through array of wire objects and attempt to evaluate instructions. If instructions throw error, move to next object and repeat. When all objects are sucessfully processes, return the values of each wire
const processInput = (arr) => {
  const processedArr = arr;
  return processedArr;
};

// console.dir(main(), { maxArrayLength: null });
main();
