## BOJ node.js로 입력하기

boj 사이트에선 prompt로 JavaScript문을 입력받을 수 없기 때문에 특정 모듈을 사용해야 한다.

JavaScript로 코딩테스트 준비를 하는사람은 C++이나 Python보다 비교적으로 적기 때문에 인터넷 서핑을 많이 해야한다.

<br>

### fs 모듈

fs 모듈 사용은 알고 리즘 마다 경로가 달라져서 보편적으로 사용할 수 없다. <br>
`출처 https://gimgongta.tistory.com/20` <br>
fs 모듈 사용 예시

```javascript
//한줄짜리 입력일 경우 (예 "사과")

// 문자로 입력받은것 정수나 숫자로 입력받기 preseInt(),Number()

var fs = require("fs");

var input = fs.readFileSync("/dev/stdin").toString();

var result = input; // 이 변수에 "사과" 가 들어간다.

// 한줄에 스페이스로 여러 파라미터가 들어가는 경우( 예를들어 "사과 토마토 수박" );

var fs = require("fs");

var input = fs.readFileSync("/dev/stdin").toString().split(" ");

var result1 = input[0]; //입력받은값이 정수이면 parseIn, 소수이면parseFloat(input[0]);

var result2 = input[1];

var result3 = input[2];

// 여러줄로(개행되어) 여러 파라미터가 들어가는경우
// 예를들어
// 사과
// 토마토
// 수박

var fs = require("fs");

var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var result1 = input[0];

var result2 = input[1];

var result3 = input[2];
```

<br>

### readline 모듈

위의 fs모듈을 사용하면 자꾸 경로 에러가 나서 가장 많이 사용하는 방법인 readline 모듈이다. <br>
`출처 https://velog.io/@exploit017` <br>
readline 모듈 사용 예시

```javascript
//하나 입력
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(line);

  //기본적으로 매개변수 line에 할당된다.

  rl.close();
}).on("close", function () {
  process.exit();
});

//한 줄에 스페이스로 구분하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  //매개변수 input에 할당된다.
  console.log(input[0] + input[1]);

  process.exit();
});

//여러줄 입력//
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  //내용이고 줄바꿈하면 인덱스바뀜 ex) input[0] enter -> input[1]
  process.exit();
});
```

프로젝트나 다른 이것저것 하다가 다시 문제를 풀려고 하면 자꾸 모듈 사용하는게 기억이 잘 안나서 아예 정리를 해버렸다. <br>
프로그래머스로 넘어가야되나...🤔
