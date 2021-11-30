const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    

    let stars = '';
    for(let stars = 1; stars <= line; stars++){
        console.log(' '.repeat(line - stars) + '*'.repeat(stars))
    }
    console.log(stars);
    
    
rl.close();
}).on('close', function () {
    process.exit();
});

//위의 내용...fs 모듈에서는 틀렸습니다 떴음 ㅠ//
//아래 나용...  런타임 에러 // 
// for(let i=0; i<N; i++){// N번째 줄까지, height
//     let blanks = ''; //초기화
//     let stars = '';  //초기화

//     for(let b = N-1; b>i; b--){//(N-1)개의 공백으로 시작해서 1씩 감소
//         blanks += ' '; // blanks에 공백 담기
//     }
//     for(let s=0; s<=i; s++){//0번째부터 i번째까지 1씩 증가
//         stars += '*'; // stars에 * 담기
//     }
//     console.log(blanks+stars);//출력
