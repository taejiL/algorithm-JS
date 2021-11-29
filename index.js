let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = input[0].split(' '); //개수
let answer = ""; //하나의 문자열에 담기

  for(let i = 1; i <= T; i++){
    let ABC = input[i].split(' '); // A와 B
    A = Number(ABC[0]);
    B = Number(ABC[1]);
    answer += A + B + "\n";
    //console.log(`${A+B}`)//콘솔을 적게 출력해야 한다. 
  }
 console.log(answer);
 //하나의 문자열에 담아 마지막에 한번만 출력하도록 한다.(빠르게 수행)


