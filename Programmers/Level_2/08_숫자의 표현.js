// 나의 풀이
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n / 2; i++) {
    for (let j = i, temp = 0; j <= n; j++) {
      temp += j;
      if (temp === n) {
        answer++;
      } else if (temp > n) {
        break;
      }
    }
  }
  return answer + 1;
}

// 다른 사람 풀이
function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}
