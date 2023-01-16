const { Timer, parseInput } = require("../../utils/utils.js");
const timer = new Timer();

// Get array[0] = instructions and array[1] = targetWire
const inputArr = parseInput("testinput.txt", "\n")
  .trim()
  .toUpperCase()
  .split("\n")
  .map((line) => line.split("->").map((side) => side.trim()))
  .reduce((obj, line) => {
    obj[line[1]] = line[0].split(" ");
    return obj;
  }, {});

// console.log(inputArr);
// Build map of wires
const wires = new Map();
for (const key in inputArr) {
  let [left, operator, right] = inputArr[key];
  if (parseInt(left)) {
    left = parseInt(left);
    operator = "ASSIGN";
    right = null;
  } else if (left === "NOT") {
    left = null;
    operator = "NOT";
    right = inputArr[key][1];
  }
  wires.set(key, { left, operator, right });
}

// console.log(wires);

// Convert values to numbers
wires.forEach((value) => {
  Object.keys(value).forEach((key) => {
    if (parseInt(value[key])) value[key] = parseInt(value[key]);
  });
});

const wiresObject = Object.fromEntries(wires.entries());

// console.log(wiresObject);

function buildTree(tree, root) {
  const memo = {};
  if (memo[root]) return memo[root];
  if (!tree[root]) return null;
  let root_node = { value: root, left: null, right: null, operator: null };
  if (tree[root].operator === "ASSIGN" || !tree[root].operator) {
    if (typeof tree[root].left === "string") {
      root_node.left = buildTree(tree, tree[root].left);
    } else {
      root_node.left = tree[root].left;
    }
    root_node.operator = "ASSIGN";
    memo[root] = root_node;
    return root_node;
  } else {
    root_node.left = buildTree(tree, tree[root].left);
    root_node.right = buildTree(tree, tree[root].right);
    root_node.operator = tree[root].operator;
    memo[root] = root_node;
    return root_node;
  }
}

const tree = buildTree(wiresObject, "X");
console.dir(tree, { depth: null });
