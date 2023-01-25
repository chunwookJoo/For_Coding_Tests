// 후보 추천하기

const input = require("fs")
  // .readFileSync("1713ex.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input[0];
const studentCnt = input[1];
const totalRecommend = input[2].split(" ");

const answer = [];
const stuArr = [];
const photoArr = [];

for (let i = 0; i < studentCnt; i++) {
  stuArr.push([totalRecommend[i], 1]);
}

for (let i = 0; i < studentCnt; i++) {
  // 포토존 자리가 남아있음
  if (photoArr.length <= n - 1) {
    photoArr.push(stuArr[i]);
  }

  // 포토존 자리가 없음
  else {
    if (photoArr[0].indexOf(stuArr[i][0]) !== -1) {
      const idx = photoArr[0].indexOf(stuArr[i][0]);
      photoArr[idx][1] += 1;
    } else {
      for (let j = 0; j < photoArr.length; j++) {
        if (photoArr[j][1] <= stuArr[i][1]) {
          // 포토존에 이미 있으면
          if (photoArr.map((item) => item[0] === stuArr[i][0]).includes(true)) {
            continue;
          }
          // 아니면 사진 걸어줌
          photoArr.splice(j, 1);
          photoArr.push(stuArr[i]);
          break;
        }
      }
    }
  }
}

photoArr.sort((a, b) => a[0] - b[0]);
photoArr.forEach((item) => answer.push(item[0]));
console.log(answer.join(" "));
