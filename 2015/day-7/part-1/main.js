const wires = {};
// 16-bit version of bitwise operations
const AND = (a, b) => a & b & 0xffff;
const OR = (a, b) => a | (b & 0xffff);
const LSHIFT = (a, b) => (a << b) & 0xffff;
const RSHIFT = (a, b) => (a >> b) & 0xffff;
const NOT = (a) => ~a & 0xffff;
const ASSIGN = (a) => a;

// Test
wires["x"] = ASSIGN(123);
wires["y"] = ASSIGN(456);
wires["d"] = AND(wires["x"], wires["y"]);
wires["e"] = OR(wires["x"], wires["y"]);
wires["f"] = LSHIFT(wires["x"], 2);
wires["g"] = RSHIFT(wires["y"], 2);
wires["h"] = NOT(wires["x"]);
wires["i"] = NOT(wires["y"]);
console.log(wires);
