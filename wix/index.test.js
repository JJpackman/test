const assert = require("assert");
const solution = require("./index");

const message = "SMS messages are really short";

assert.equal(solution(message, 12), 3);
assert.equal(solution(message, 8), 5);
assert.equal(solution(message, 9), 5);
assert.equal(solution(message, 10), 4);
assert.equal(solution(message, 7), -1);

const wrongParams = [
  ["", 3.5],
  [],
  ["  test test  ", 3],
  ["  test", 6],
  ["test  ", 16],
  ["test   "]
];

wrongParams.forEach(paramsPair => {
  assert.equal(solution(...paramsPair), undefined);
});
