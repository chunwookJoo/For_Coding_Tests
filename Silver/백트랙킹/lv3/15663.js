const input = require("fs")
  // .readFileSync("15663ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1].replace(/\r/g, ""));

const numArr = input[1]
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b);

const answer = [];
const temp = [];

const DFS = (index, L) => {
  if (L === M) {
    answer.push(temp.join(" "));
    return;
  }

  for (let i = index; i < N; i++) {
    temp[L] = numArr[i];
    DFS(i, L + 1);
  }
};

DFS(0, 0);

const set = new Set(answer);
const filterArr = [...set];
let result = "";

for (let i of filterArr) {
  result += `${i}\n`;
}

console.log(result);
