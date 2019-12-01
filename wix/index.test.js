const assert = require("assert");
const solution = require("./index");

const message = "SMS messages are really short";

assert.equal(solution(message, 12), 3);
assert.equal(solution(message, 8), 5);
assert.equal(solution(message, 9), 4);
assert.equal(solution(message, 7), -1);
