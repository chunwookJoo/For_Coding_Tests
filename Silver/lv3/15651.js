const input = require("fs")
  // .readFileSync("15651ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((nm) => parseInt(nm));

const N = input.shift();
const M = input.shift();

let answer = "";
const temp = [];

const DFS = (L) => {
  if (L === M) {
    answer += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    temp[L] = i;
    DFS(L + 1);
  }
};

DFS(0);

console.log(answer);
