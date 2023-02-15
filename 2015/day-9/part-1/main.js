const utils = require("../../utils/utils.js");

const parseInput = () => {
  const adjacencyList = [];
  const inputArr = utils
    .parseInput("testinput.txt")
    .trim()
    .split("\n")
    .reduce((acc, curr) => {
      const [node, , edge, , distance] = curr.split(" ");
      if (!acc[node]) {
        acc[node] = [];
      }
      acc[node].push({ edge, distance });
      return acc;
    }, []);
  return inputArr;
};

function main() {
  const list = parseInput();
  console.log(list);
}

main();
