let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//input은 input.txt를 읽어서 줄 별로 나누어서 배열에 담은 것
//input = ['4 7 2'] ['3 8 5']

data1 = input[0];//첫 번째 줄의 데이터
data2 = input[1].split('');//두 번째 줄의 데이터를 나눔
// data1 = ['472'] data2 = ['3', '8', '5']

A = Number(data1); 472
B = (data2); // 3, 8, 5

B_1 = Number(B[2]); // 5
B_10 = Number(B[1]); // 8
B_100 = Number(B[0]); // 3

console.log(A*B_1);
console.log(A*B_10);
console.log(A*B_100);
console.log(Number(A*input[1]));