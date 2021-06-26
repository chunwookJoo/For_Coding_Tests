// 키패드 누르기

function solution(numbers, hand) {
  function distance(num, NowL, NowR, pos, hand) {
    const DisL =
      Math.abs(pos[NowL][0] - pos[num][0]) +
      Math.abs(pos[NowL][1] - pos[num][1]);
    const DisR =
      Math.abs(pos[NowR][0] - pos[num][0]) +
      Math.abs(pos[NowR][1] - pos[num][1]);
    console.log(`NowL = ${NowL}, num = ${num}, NowR = ${NowR}`);
    console.log(pos[NowL][0], pos[num][0]);
    console.log(pos[NowL][1], pos[num][1]);

    if (DisL == DisR) return hand == "left" ? "L" : "R";
    return DisL < DisR ? "L" : "R";
  }

  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let NowL = "*",
    NowR = "#";
  let answer = "";
  for (let num of numbers) {
    if (num % 3 === 1) {
      answer += "L";
      NowL = num;
    } else if (num !== 0 && num % 3 === 0) {
      answer += "R";
      NowR = num;
    } else {
      answer += distance(num, NowL, NowR, pos, hand);
      answer[answer.length - 1] == "L" ? (NowL = num) : (NowR = num);
    }
  }
  return answer;
}
