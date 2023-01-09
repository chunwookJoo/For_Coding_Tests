/**
 * 1. A, B, C, D, E, F 중 하나로 시작
 * 2. A, F, C는 최소 1개 이상 있어야함
 * 3. A, B, C, D, E, F 제외한 다른 문자는 없어야함
 */
// const input = require("fs").readFileSync("example.txt").toString().split("\n");
const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();
const REGEX = /^[A-F]?A+F+C+[A-F]?$/;

input.forEach((line) => {
  console.log(line.replace(/\r/g, "").match(REGEX) ? "Infected!" : "Good");
});
