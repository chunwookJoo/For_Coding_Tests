// N-Queen
const input = require("fs")
  // .readFileSync("9663ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

const N = parseInt(input);
let answer = 0;
const chessArr = Array.from(Array(N), () => new Array(N).fill(0));

const isPossible = (L, X) => {
  for (let i = 0; i < L; i++) {
    if (chessArr[i] === X) return false;
    if (Math.abs(X - chessArr[i]) === L - i) return false;
  }
  return true;
};

const DFS = (L) => {
  if (L === N) {
    answer++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isPossible(L, i)) {
      chessArr[L] = i;
      DFS(L + 1);
    }
  }
};

DFS(0);
console.log(answer);
