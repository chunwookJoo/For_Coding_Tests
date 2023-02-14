const [[N, M], ...input] = require("fs")
  .readFileSync("11660ex.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const sumTable = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
let answer = [];

// 1행, 1열 세팅
input.slice(0, N).forEach((row, x) => {
  row.forEach((cell, y) => {
    sumTable[x + 1][y + 1] = cell;
  });
});

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    sumTable[i][j] +=
      sumTable[i - 1][j] + sumTable[i][j - 1] - sumTable[i - 1][j - 1];
  }
}

const required = input.slice(N);
console.log(required);
console.log(sumTable);

required.forEach(([x1, y1, x2, y2]) => {
  answer.push(
    sumTable[x2][y2] -
      sumTable[x1 - 1][y2] -
      sumTable[x2][y1 - 1] +
      sumTable[x1 - 1][y1 - 1]
  );
});
console.log(answer);

console.log(answer.join("\n"));
