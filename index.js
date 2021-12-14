let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 0;

while ( i<input.length ) {
let A = Number(input[i].split(' ')[0]);
let B = Number(input[i].split(' ')[1]);
if( A===0 && B===0 ){ // 마지막 0 두개 출력X
    break;
  }
  console.log(A+B)
  i++
}
// while(input[0][0] != 0){
//   for(i=0; i<input; i++){
//     console.log(input[i][i])
//   }
  
// }

