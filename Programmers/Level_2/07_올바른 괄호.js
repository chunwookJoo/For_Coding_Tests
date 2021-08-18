// 나의 풀이
function solution(s) {
  let arr = [];
  let stack = [];
  let answer;
  arr = s.split("");

  if (arr[0] === ")") return (answer = false);
  while (arr.length) {
    if (arr[0] === "(") {
      stack.push(arr.shift());
    } else if (arr[0] === ")" && stack.length > 0) {
      stack.pop();
      arr.shift();
    } else {
      return (answer = false);
    }
  }

  answer = stack.length > 0 ? false : true;
  return answer;
}

// 코드 수정
function solution(s) {
  let count = 0;
  let answer;
  let arr = s.split("");

  if (arr[0] === ")") return (answer = false);
  for (let i = 0; i < s.length; i++) {
    if (arr[i] === "(") {
      count++;
    } else if (arr[i] === ")" && count > 0) {
      count--;
    } else {
      return (answer = false);
    }
  }

  answer = count > 0 ? false : true;

  return answer;
}
