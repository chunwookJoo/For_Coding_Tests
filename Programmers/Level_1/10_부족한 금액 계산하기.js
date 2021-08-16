// 나의 풀이
function solution(price, money, count) {
  var answer = 0;
  let totPrice = 0;

  while (count != 0) {
    answer += price;
    totPrice += answer;
    count--;
  }
  answer = money >= totPrice ? 0 : totPrice - money;
  return answer;
}

// 다른 사람 풀이 (가우스 공식)
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
