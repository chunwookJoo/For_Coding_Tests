// 위장
function solution(clothes) {
  var answer = 1;
  const total = clothes.length;
  let obj = {};

  for (let i = 0; i < total; i++) {
    if (obj[clothes[i][1]] >= 1) {
      obj[clothes[i][1]] += 1;
    } else {
      obj[clothes[i][1]] = 1;
      console.log("hello");
    }
  }
  for (let key in obj) {
    answer *= obj[key] + 1;
  }
  return answer - 1;
}
