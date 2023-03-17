const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const visited = new Array(N + 1).fill(0);
const graph = Array.from(new Array(N + 1), () => new Array());

input.map((item) => {
  const [from, to] = item.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

const stack = [1];
const parent = new Array(N + 1);

while (stack.length) {
  const temp = stack.shift();
  for (let i of graph[temp]) {
    if (!visited[i]) {
      visited[i] = 1;
      parent[i] = temp;
      stack.push(i);
    }
  }
}

for (let j = 2; j < parent.length; j++) {
  console.log(parent[j]);
}
