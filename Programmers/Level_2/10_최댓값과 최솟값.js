function solution(s) {
  let answer;
  let min, max;

  answer = s.split(" ");
  answer.sort((a, b) => {
    return a - b;
  });

  min = answer.shift();
  max = answer.pop();

  return min + " " + max;
}
