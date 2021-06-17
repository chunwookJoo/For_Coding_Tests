const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputArr = [];

function floor_decoration() {
  this.value = [];
  this.N = 0;
  this.M = 0;

  // 입력받은 N 값과 M 값을 사용하기 위해 각각 this.N, this.M에 넣어준다.
  this.parsing = (inputArr) => {
    const temp = inputArr
      .shift()
      .split(" ")
      .map((x) => parseInt(x));
    this.N = temp[0];
    this.M = temp[1];
    this.value = inputArr;
  };
  this.solution = () => {
    let w = 0,
      h = 0;

    for (let i = 0; i < this.N; i++) {
      let str = "";
      for (let j = 0; j < this.M; j++) {
        str += this.value[i][j];
      }

      let len = 0;
      const res = str.split("|");
      res.forEach((element) => {
        if (element !== "") len++;
      });
      w += len;
    }
    for (let i = 0; i < this.M; i++) {
      let str = "";
      for (let j = 0; j < this.N; j++) {
        str += this.value[j][i];
      }
      console.log(str);
      let len = 0;
      const res = str.split("-");
      res.forEach((element) => {
        if (element !== "") len++;
      });
      h += len;
    }
    console.log(w + h);
  };
  return;
}

rl.on("line", (userInput) => {
  inputArr.push(userInput);
}).on("close", () => {
  const fd = new floor_decoration();
  fd.parsing(inputArr);
  fd.solution();
});
