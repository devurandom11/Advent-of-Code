import fs from "fs";
const inputType: { main: string; test: string } = {
  main: "input.txt",
  test: "testinput.txt",
};

const inputArr: number[] = fs
  .readFileSync(inputType.main, "utf-8")
  .trim()
  .split("\n")
  .map((num) => parseInt(num))
  .map((val, i, arr) => val + arr[i + 1] + arr[i + 2]);

const tracker: { [key: string]: number } = {
  ascending: 0,
  descending: 0,
};

inputArr.reduce((tracker, curr, index) => {
  if (index === 0) {
    console.log(`We are starting at ${curr}`);
  } else if (index === inputArr.length - 1 || index === inputArr.length - 2) {
    console.log(`We are ending at ${inputArr[inputArr.length - 3]}`);
  } else {
    if (curr > inputArr[index - 1]) {
      tracker.ascending++;
      console.log(`We are ascending from ${inputArr[index - 1]} to ${curr}`);
    } else if (curr < inputArr[index - 1]) {
      tracker.descending++;
      console.log(`We are descending from ${inputArr[index - 1]} to ${curr}`);
    }
  }
  return tracker;
}, tracker);

console.log(tracker);
