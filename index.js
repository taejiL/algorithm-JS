let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//input은 input.txt를 읽어서 줄 별로 나누어서 배열에 담은 것
//input = ['5 8 4']

data = input[0].split(' ');//첫 번째 줄의 데이터를 공백 기준 나눔
// data = ['5', '8', '4']

A = Number(data[0]);
B = Number(data[1]);
C = Number(data[2]);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);