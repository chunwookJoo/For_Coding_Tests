// 회문
// 1. 문자열 길이가 짝수인지 확인
// 2. 짝수이고 처음과 끝이 다르면 2
// 3. 투 포인터로 양 끝에서 서로 확인
// 4. startP가 finishP보다 작을때까지 startP++, finishP--
// 5. 서로 다른 문자가 나오면 한칸씩 이동해보면서 다시 확인
// 6. 한칸씩 이동해서 true가 나오면 1 false면 2

const input = require("fs")
  // .readFileSync("example.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const answer = [];

const isPalindrome = (str, startP, finishP) => {
  while (startP < finishP) {
    if (str[startP] === str[finishP]) {
      startP++;
      finishP--;
    } else {
      return false;
    }
  }
  return true;
};

const solution = (str) => {
  let startP = 0;
  let finishP = str.length - 1;

  while (startP < finishP) {
    if (str[startP] === str[finishP]) {
      startP++;
      finishP--;
    } else {
      if (
        isPalindrome(str, startP + 1, finishP) ||
        isPalindrome(str, startP, finishP - 1)
      ) {
        return 1;
      } else {
        return 2;
      }
    }
  }
  return 0;
};

for (let i of input) {
  answer.push(solution(i.replace(/\r/g, "")));
}
console.log(answer.join("\n"));
