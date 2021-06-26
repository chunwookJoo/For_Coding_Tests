// 가장 큰 수
function solution(numbers) {
  var answer = "";
  answer = numbers
    .map((m) => m.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer.replace(/^0+/, "0");
}
