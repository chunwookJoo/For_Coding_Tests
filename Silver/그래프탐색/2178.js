const input = require("fs")
  .readFileSync("2178ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.replace(/\r/g, ""));

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((item) => item.split("").map(Number));
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
// const directionX = [0, 0, 1, -1];
// const directionY = [1, -1, 0, 0];
const stack = [[0, 0, 1]];

console.log(dir);

while (stack.length) {
  const [x, y, distance] = stack.shift();

  for (let i = 0; i < 4; i++) {
    let nextX = x + dir[i][0];
    let nextY = y + dir[i][1];

    if (nextX >= 0 && nextY >= 0 && nextX < N && nextY < M) {
      if (board[nextY][nextX] === 0) {
        board[nextY][nextX] = distance + 1;
        stack.push([nextX, nextY, distance + 1]);
      }
    }
  }
}

console.log(board[N - 1][M - 1]);
