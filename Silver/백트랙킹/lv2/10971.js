/**
 * 주의
 * 1. 마을 순회를 하고 출발지점으로 되돌아가야함
 */

const input = require("fs")
  .readFileSync("10971ex.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const cityCnt = +input.shift();
const cityArr = [];

for (let i of input) {
  cityArr.push(
    i
      .replace(/\r/g, "")
      .split(" ")
      .map((item) => +item)
  );
}

const answer = [];
const visited = new Array(cityCnt).fill(0);
const temp = [];

const DFS = (index, currentNode) => {
  if (currentNode === cityCnt - 1) visited[0] = 0; // 순회하고 다시 출발지점으로 돌아가기
  if (currentNode === cityCnt) {
    if (visited.every((e) => e === 1)) {
      answer.push(temp.reduce((a, c) => a + c, 0));
    }
    // if (!answer.includes(0)) {
    //   answer.push(temp.reduce((a, c) => a + c, 0));
    // }
    return;
  }

  for (let i = 0; i < cityCnt; i++) {
    if (!cityArr[index][i]) continue; // 값이 없는 곳은 건너뜀
    if (visited[i] === 0 && index !== i) {
      visited[i] = 1;
      temp.push(cityArr[index][i]);
      DFS(i, currentNode + 1);
      temp.pop();
      visited[i] = 0;
    }
  }
};
DFS(0, 0);
console.log(Math.min(...answer));
