let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = input[0].split(' '); //주어진 N
let answer = ""; // 초기화

for( i=1; i<=N; i++ ){
  answer += i + '\n'; // 빨리
  //출력을 하나씩 해주면 시간 초과가 난다. 
}
console.log(answer);//마지막에 한번에 출력