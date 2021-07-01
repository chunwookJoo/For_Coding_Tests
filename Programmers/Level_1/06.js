// 내 마음대로 정렬하기
function solution(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    if (a.charAt(n) > b.charAt(n)) return 1;
    else if (a.charAt(n) < b.charAt(n)) return -1;
    else {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
  });
  return answer;
}
