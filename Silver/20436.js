// ZOAC 3

const input = require("fs")
  // .readFileSync("20436example.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const leftChar = "qwertasdfgzxcv";
const [startL, startR] = input[0].split(" ");
const str = input[1];
let answer = 0;

// 키보드 좌표 리턴
const searchKeyboard = (char) => {
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < keyboard[i].length; j++) {
      if (char === keyboard[i][j]) return [i, j];
    }
  }
};

let leftXY = searchKeyboard(startL);
let rightXY = searchKeyboard(startR.replace(/\r/g, ""));

for (let i of str) {
  let temp;
  if (leftChar.includes(i)) {
    temp = searchKeyboard(i);
    answer += Math.abs(leftXY[0] - temp[0]) + Math.abs(leftXY[1] - temp[1]);
    leftXY = temp;
  } else {
    temp = searchKeyboard(i);
    answer += Math.abs(rightXY[0] - temp[0]) + Math.abs(rightXY[1] - temp[1]);
    rightXY = temp;
  }
}

console.log(answer + str.length);
