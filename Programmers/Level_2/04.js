// 프린터

function solution(priorities, location) {
  var answer = 0;
  let cnt = 0;
  let loc = location;

  while (priorities.length > 0) {
    let p = priorities.shift();
    if (priorities.filter((e) => e > p).length > 0) {
      priorities.push(p);
    } else {
      cnt++;
      if (loc == 0) return (answer = cnt);
    }
    loc--;
    if (loc == -1) {
      loc = priorities.length - 1;
    }
  }
  return answer;
}
