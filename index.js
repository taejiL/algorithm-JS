const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) { // 입력되는 값을 line에서 한줄씩 읽어들임
  input.push(line);
}).on("close", function () {
  const X = Number(input[0]);
  const Y = Number(input[1]);

  if (X > 0 && Y > 0) {
    console.log(1);
  } else if (X < 0 && Y > 0) {
    console.log(2);
  } else if (X < 0 && Y < 0) {
    console.log(3);
  } else if (X > 0 && Y < 0) {
    console.log(4);
  } else {
    console.log(0);
  }

  process.exit(); // 프로그램 종료
});


//fs모듈로하면 오류나는 문제//
/// 참고 ///
// if (X > 0) {
//     console.log(Y > 0 ? 1 : 4);
//   } else {
//     console.log(Y > 0 ? 2 : 3);
//   }