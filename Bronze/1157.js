// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const charObject = {};

// rl.on("line", (userInput) => {
//   const input = userInput;

//   for (let char of input.toUpperCase()) {
//     charObject[char] = charObject[char] ? charObject[char] + 1 : 1;
//   }
//   let max = Math.max.apply(null, Object.values(charObject));

//   let maxChar = "";
//   let count = 0;

//   for (let char in charObject) {
//     if (charObject[char] === max) {
//       maxChar = char;
//       count++;
//     }
//     if (count > 1) {
//       console.log("?");
//       return;
//     }
//   }
//   console.log(maxChar.toUpperCase());
//   rl.close();
// });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

charObj = {};

rl.on("line", (userInput) => {
  const input = userInput;
  for (let char of input.toUpperCase()) {
    charObj[char] = charObj[char] ? charObj[char] + 1 : 1;
  }
  let max = Math.max.apply(null, Object.values(charObj));
  console.log(charObj);

  let charMax = "";
  let count = 0;

  for (let char in charObj) {
    if (charObj[char] === max) {
      charMax = char;
      count++;
    }
    if (count > 1) {
      console.log("?");
    }
  }
});
