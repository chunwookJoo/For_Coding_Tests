function solution(x) {
  let numArr = x.toString().split("");
  let sum = 0;
  numArr.forEach((e) => {
    sum += Number(e);
  });

  let answer = x % sum == 0 ? true : false;
  return answer;
}
