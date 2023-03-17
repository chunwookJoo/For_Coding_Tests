const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let graph = [],
  results = [],
  size = 0;

const solution = () => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (graph[i][j]) search(i, j);
    }
  }
};

const search = (startX, startY) => {
  let result = 0;
  const queue = [[startX, startY]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!graph[x][y]) continue;

    graph[x][y] = 0;
    result++;

    for (let i = 0; i < 4; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= size || yPos >= size) continue;
      if (graph[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }

  results.push(result);
};

size = Number(input.shift());

graph = [...Array(size)];
for (let i = 0; i < input.length; i++) {
  graph[i] = [...input[i].replace(/\r/g, "").split("").map(Number)];
}

solution();
console.log(results.length);
results
  .sort((a, b) => a - b)
  .forEach((e) => {
    console.log(e);
  });
