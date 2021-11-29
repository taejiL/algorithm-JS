let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');


  let message = ''; // 초기화

  for (let i = 0; i < input[0]; i++) { //input[0]첫째줄 처음에 들어온것(명확히)
  message += '*'; // 한바퀴씩 돌때마다 *를 더해준다.
  console.log(message);
  }