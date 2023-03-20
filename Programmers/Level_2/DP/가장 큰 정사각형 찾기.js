function solution(board) {
  const totalLength = board.length;
  let max = 0;

  for (let i = 1; i < totalLength; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (
        board[i][j] !== 0 &&
        board[i - 1][j] !== 0 &&
        board[i][j - 1] !== 0 &&
        board[i - 1][j - 1] !== 0
      ) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }
    }
  }
  for (let i = 0; i < totalLength; i++) {
    for (let j = 0; j < board[i].length; j++) {
      max = Math.max(max, board[i][j]);
    }
  }
  return Math.pow(max, 2);
}
