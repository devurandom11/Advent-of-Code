import fs from "fs";
var inputType = {
  main: "input.txt",
  test: "testinput.txt",
};
var inputArr = fs
  .readFileSync(inputType.main, "utf-8")
  .trim()
  .split("\n")
  .map(function (num) {
    return parseInt(num);
  })
  .map(function (val, i, arr) {
    return val + arr[i + 1] + arr[i + 2];
  });
var tracker = {
  ascending: 0,
  descending: 0,
};
inputArr.reduce(function (tracker, curr, index) {
  if (index === 0) {
    console.log("We are starting at ".concat(curr));
  } else if (curr > inputArr[index - 1]) {
    tracker.ascending++;
    console.log(
      "We are ascending from ".concat(inputArr[index - 1], " to ").concat(curr)
    );
  } else if (curr < inputArr[index - 1]) {
    tracker.descending++;
    console.log(
      "We are descending from ".concat(inputArr[index - 1], " to ").concat(curr)
    );
  }
  return tracker;
}, tracker);
console.log(tracker);
