let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let alarm = input[0].split(' ');
//첫 번째 줄의 데이터를 공백 기준 나눔 (0 ≤ H ≤ 23, 0 ≤ M ≤ 59)
H = Number(alarm[0]);  // 시간
M = Number(alarm[1]);  // 분

if ( M < 45 ) {
  H -= 1;
  M += 15; // M +60 -45
  if (H === -1){
    H = 23;
  } 
  console.log(`${H} ${M}`);
} else {
  console.log(`${H} ${M-45}`);
}