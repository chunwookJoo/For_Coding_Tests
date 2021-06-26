// 2016년

function solution(a, b) {
  const monthes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let temp = 0;
  var answer = "";

  for (let i = 0; i < a - 1; i++) temp += monthes[i];
  temp += b;
  if (temp % 7 == 0) return (answer = "THU");
  else answer = days[(temp %= 7) - 1];
  return answer;
}

// 다른 사람들의 코드를 찾아보니 마지막 if문은 필요없었다...
// THU를 배열 맨 앞에 두면 되는 것을.. 멍충이
