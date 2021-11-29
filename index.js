let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = input[0].split(' ');
let sum = 0; // sum 초기화


  for(let i = 1; i <= N; i++){
    sum += i //sum = sum + i
  }
  console.log(sum) // 밖에서 찍어줘 마지막 한번만 출력


