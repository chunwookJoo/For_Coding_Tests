const input = require("fs")
  // .readFileSync("15650ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((nm) => parseInt(nm));

const N = input.shift();
const M = input.shift();

let answer = "";
const temp = [];
const checked = new Array(N).fill(0);

const DFS = (index, L) => {
  if (L === M) {
    answer += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = index; i < N; i++) {
    if (checked[i] === 0) {
      checked[i] = 1;
      temp[L] = i + 1;
      DFS(i, L + 1);
      checked[i] = 0;
    }
  }
};

DFS(0, 0);

console.log(answer);
