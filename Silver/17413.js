const input = require("fs")
  // .readFileSync("example.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

// const words = /\>(.*)\</;
// const tags = /\<(.*)\>/g;

let answer = "";
let word = "";
let flag = 0;

for (let i of input) {
  if (i === "<") {
    answer += word.split("").reverse().join("");
    word = "";
    answer += i;
    flag = 1;
  } else if (i === ">") {
    answer += word + i;
    word = "";
    flag = 0;
  } else if (i === " ") {
    answer += (!flag ? word.split("").reverse().join("") : word) + " ";
    word = "";
  } else {
    word += i;
  }
}

if (word !== "") {
  answer += word.split("").reverse().join("");
}

console.log(answer);
