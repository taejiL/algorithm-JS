let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//input은 input.txt를 읽어서 줄 별로 나누어서 배열에 담은 것

//A와 B는 공백 한 칸으로 구분되어져 있다.
A = Number(input[0].split(' ')[0]);//첫 번째 줄의 1데이터
B = Number(input[0].split(' ')[1]);//첫 번째 줄의 2데이터
// A = ['1'] B = ['2']

if ( A > B ) {
  console.log('>');
}
else if ( A < B ) {
  console.log('<');
}
else {
  console.log('==');
}