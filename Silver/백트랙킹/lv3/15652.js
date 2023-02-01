const input = require("fs")
  // .readFileSync("15652ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((nm) => parseInt(nm));

const N = input.shift();
const M = input.shift();

let answer = "";
const temp = [];

const DFS = (index, L) => {
  if (L === M) {
    answer += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = index; i <= N; i++) {
    temp[L] = i;
    DFS(i, L + 1);
  }
};

DFS(1, 0);

console.log(answer);
