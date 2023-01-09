const input = require("fs")
  // .readFileSync("example.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

let fileObj = {};
let answer = [];

for (let i = 0; i < input.length; i++) {
  const str = input[i].replace(/\r/g, "");
  const fileExt = str.substring(str.lastIndexOf(".") + 1);
  fileObj[fileExt] = fileObj[fileExt] ? fileObj[fileExt] + 1 : 1;
}

for (let i in fileObj) {
  answer.push(i + " " + fileObj[i]);
}

console.log(answer.sort().join("\n"));
