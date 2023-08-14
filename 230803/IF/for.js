//for문은 반복
//for(초기값; 조건; 증가){}
// for(let i = 0 ; i < 5 ; i++){ //i가 5보다 작아야 한다는 것이 조건 > 0~4까지 반복
//     console.log(i)
// }

// for(let i=5; i<10; i++){ //i가 10보다 작을 때까지 증가
//     console.log(i)
// }

// for(let x=2; x<=9; x++){ //x 2부터 9까지 숫자를 얻어낸다
//     for(let y=1; y<=9; y++) //y 1부터 9까지 숫자를 얻어낸다
//     console.log(x +'*'+ y+'=' , x*y)
// }

// let star = ''
// for(let i = 0; i < 5; i++){
//     star += '*' //star = star+'*'
//     console.log(star)
// }

let star = ''
for (let i = 0; i < 5; i++){
    if (i === 0 || i > 1){
        star += "*"
    } else{
        star+="0"
    }
    console.log(star)
}