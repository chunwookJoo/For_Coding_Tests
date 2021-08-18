function solution(s) {
  let answer = [];
  let str = [];
  answer = s.split(" ");

  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].toLowerCase();
    str.push(answer[i].charAt(0).toUpperCase() + answer[i].slice(1));
  }
  return str.join(" ");
}
