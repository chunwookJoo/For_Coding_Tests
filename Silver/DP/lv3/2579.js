const input = require("fs")
  .readFileSync("2579ex.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e.replace(/\r/g, ""));

const stairLength = input.shift();
const stairScoreArr = input;
console.log(stairScoreArr);

const dyArr = new Array(stairLength).fill(0);
dyArr[0] = stairScoreArr[0];
dyArr[1] = Math.max(stairScoreArr[0] + stairScoreArr[1], stairScoreArr[1]);
dyArr[2] = Math.max(
  stairScoreArr[0] + stairScoreArr[2],
  stairScoreArr[1] + stairScoreArr[2]
);

for (let i = 3; i < stairLength; i++) {
  dyArr[i] = Math.max(
    dyArr[i - 3] + stairScoreArr[i] + stairScoreArr[i - 1],
    dyArr[i - 2] + stairScoreArr[i]
  );
}

console.log(dyArr);

console.log(dyArr[stairLength - 1]);
