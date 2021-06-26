// K번째 수

function solution(array, commands) {
  var answer = [];
  let temp = 0;

  for (let i = 0; i < commands.length; i++) {
    let a = commands[i][0];
    let z = commands[i][1];
    let point = commands[i][2];

    temp = array.slice(a.shift() - 1, z.shift()).sort((a, b) => a - b);
    answer.push(temp[point.shift() - 1]);
  }

  return answer;
}
