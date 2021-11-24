let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//input은 input.txt를 읽어서 줄 별로 나누어서 배열에 담은 것
//input = ['7 3']

data = input[0].split(' ');//첫 번째 줄의 데이터를 공백 기준 나눔
// data = ['7', '3']

A = Number(data[0]);
B = Number(data[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A/B));
console.log(A % B);