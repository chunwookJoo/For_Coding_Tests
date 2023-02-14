const input = require("fs")
  .readFileSync("2606ex.txt")
  // .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.replace(/\r/g, ""));

const node = parseInt(input.shift());
const edge = parseInt(input.shift());
const visited = Array(node).fill(0);
const graph = [...Array(node + 1)].map((e) => []);
let answer = 0;
console.log(input);
console.log(graph);
for (let i = 0; i < edge; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

console.log(graph);

const DFS = (node) => {
  if (visited[node]) return;

  visited[node] = 1;
  answer += 1;
  graph[node].forEach((node) => {
    if (!visited[node]) {
      DFS(node);
    }
  });
};

DFS(1);
console.log(answer - 1);
