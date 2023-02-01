// const input = require("fs").readFileSync("/dev/stdin");
const n = parseInt(require("fs").readFileSync("2661ex.txt").toString());

const NUM = [1, 2, 3];
const visited = new Array(n).fill(0);

const temp = [];
let answer = "";

const DFS = (currentNode) => {
  if (currentNode === n) {
    answer += `${Math.min([...temp])}`;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      temp[currentNode] = NUM[i % 3];
      DFS(currentNode + 1);
      visited[i] = 0;
    }
  }
};

DFS(0);
console.log(answer);
