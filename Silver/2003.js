const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// limitArr = 4 2
// numArr = 1,1,1,1
const numberSum = (limitArr, numArr) => {
  const sumArr = [10001];
  let sum = 0;
  let count = 0;
  let mid = 0;

  const numberArr = Number(limitArr[0]); // 4
  const cutlineNum = Number(limitArr[1]); // 2

  for (let i = 0; i < numberArr; i++) {
    sum += Number(numArr[i]);
    sumArr[i] = sum; // sumArr = [0,1,2,3,4];
  }
  sumArr.unshift(0);
  console.log(sumArr);
  for (let i = 0; i <= numberArr; i++) {
    start = i; // 0,1,2,3,4
    end = numberArr; // 4
    while (start <= end) {
      mid = parseInt((start + end) / 2); // mid = 2,2,3,3,4
      if (cutlineNum > sumArr[mid] - sumArr[i]) {
        // 1. if(2 > 2 - 0) = false
        // 2. if(2 > 2 - 1) = true
        start = mid + 1;
      } else if (cutlineNum < sumArr[mid] - sumArr[i]) {
        // 1. if(2 < 2 - 0) = false
        // 2. if(2 < )
        end = mid - 1;
      } else {
        count++;
        // 1. count = 1
        break;
      }
    }
  }
  console.log(count);
};

const inputArr = [];
rl.on("line", (userInput) => {
  inputArr.push(userInput);
}).on("close", () => {
  const limitArr = inputArr[0].split(" ");
  const numArr = inputArr[1].split(" ");
  numberSum(limitArr, numArr);
});
