const [N, ...input] = require("fs")
  .readFileSync("21317ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.replace(/\r/g, ""));
const K = +input.pop();
const stepArr = input.map((e) => e.split(" ").map(Number));

const sumArr = Array.from(Array(+N), () => new Array(3).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 0) sumArr[i][j] = stepArr[i][j] ? stepArr[i][j] : 0;
  }
}

console.log(sumArr);
