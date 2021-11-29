let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = input[0].split(' ');
//T 케이스 개수 


for(let i = 1; i <= T; i++){
  let ABC = input[i].split(' '); //각 줄의 A와B를 넣는다.
  console.log(`${Number(ABC[0]) + Number(ABC[1])}`) //A + B
}


