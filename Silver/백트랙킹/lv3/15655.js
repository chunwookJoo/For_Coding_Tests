const input = require("fs")
  // .readFileSync("15655ex.txt")
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

let answer = "";
const temp = [];

const DFS = (index, L) => {
  if (L === M) {
    answer += `${temp.join(" ")}\n`;
    return;
  }

  for (let i = index; i < N; i++) {
    temp[L] = numArr[i];
    DFS(i, L + 1);
  }
};

DFS(0, 0);

console.log(answer);
