function solution(numbers, target) {
  let answer = 0;

  const DFS = (L, sum) => {
    if (L === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    DFS(L + 1, sum + numbers[L]);
    DFS(L + 1, sum - numbers[L]);
  };

  DFS(0, 0);
  console.log(answer);
}

solution([4, 1, 2, 1], 4);
