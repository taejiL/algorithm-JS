let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;

while ( i<input.length-1 ) {
let A = Number(input[i].split(' ')[0]);
let B = Number(input[i].split(' ')[1]);
  console.log(A+B)
  i++
}

