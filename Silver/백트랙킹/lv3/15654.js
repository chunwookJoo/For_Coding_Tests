const input = require("fs")
  // .readFileSync("15653ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1].replace(/\r/g, ""));
const numArr = input[1]
  .split(" ")
  .map((item) => parseInt(item))
  .sort((a, b) => a - b);

const checked = new Array(N).fill(0);

let answer = "";
const temp = [];

const DFS = (L) => {
  if (L === M) {
    answer += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (checked[i] === 0) {
      checked[i] = 1;
      temp[L] = numArr[i];
      DFS(L + 1);
      checked[i] = 0;
    }
  }
};

DFS(0);

console.log(answer);
