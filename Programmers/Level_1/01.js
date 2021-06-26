// 가운데 글자 가져오기

function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer = answer.concat(s[s.length / 2 - 1]);
    answer = answer.concat(s[s.length / 2]);
  } else {
    answer = answer.concat(s[Math.floor(s.length / 2)]);
  }
  return answer;
}
