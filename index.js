let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//input은 input.txt를 읽어서 줄 별로 나누어서 배열에 담은 것

//윤년이면 1, 아니면 0
//윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때
year = Number(input[0]);//첫 번째 줄의 1데이터

if (year % 4 === 0 && (year % 100 !== 0) || (year % 400 === 0)){
  console.log('1')
} else {
  console.log('0')
  };