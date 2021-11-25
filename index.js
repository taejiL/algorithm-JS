let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//input은 input.txt를 읽어서 줄 별로 나누어서 배열에 담은 것

//첫째 줄에 시험 점수. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
score = Number(input[0]);//첫 번째 줄의 1데이터

if(score >= 90 && score <= 100){
  console.log('A')
}
else if(score >= 80 && score <= 89){
  console.log('B')
}
else if(score >= 70 && score <= 79){
  console.log('C')
}
else if(score >= 60 && score <= 69){
  console.log('D')
}
else{
  console.log('F')
}