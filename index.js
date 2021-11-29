let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]); //케이스의 개수 T


for( let i = 1; i <= T; i++ ){ 
  let ABC = input[i].split(' '); // 초기화
  let A = Number(ABC[0]);
  let B = Number(ABC[1]);
  let C = Number(ABC[0]) + Number(ABC[1]);

  console.log(`Case #${i}: ${A} + ${B} = ${C}`);
}