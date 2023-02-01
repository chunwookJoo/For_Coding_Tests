const [N, S, ...numArr] = require("fs")
  // .readFileSync("1182ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((e) => +e);

let answer = 0;

const DFS = (index, sum) => {
  if (index === N) return;

  sum += numArr[index];
  if (sum === S) answer++;

  DFS(index + 1, sum);
  DFS(index + 1, sum - numArr[index]);
};

DFS(0, 0);
console.log(answer);
