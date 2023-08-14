//string, number, null, underfined, object, array ...
//괄호 안에 조건
// if(condition) {
//     //해야 할 일
// }
// let x=1
// == 같은지 != 다른지 물어보는 연산자 > 숫자와 문자 타입을 따지지 않음
// === 값과 타입이 같은지, !== 값과 타입이 다른지  물어보는 연산자
let x=1 //개발자 도구 - console에 입력
undefined //console 결과값
x==1
true
x!=1
false
x==='1' //x와 1의 값과 타입이 같음?
false //x와 1의 타입이 다르다
x>1
false
x<1
false
x<=1
true

const a = 5
if( a > 10 ){ // if문은 true여야 출력 > 첫 조건 부여
    console.log( 'a는 10보다 큽니다.')
} else if (a < 10) {//위 조건을 새롭게 false, true 여부를 판단하는 조건 부여
    console.log( 'a는 10보다 작습니다.')
} else { // 그밖의 다른 값 > 현 작업에서는 위 두 조건 false일 때 출력 > 조건을 따로 부여하지 않음 mean: 또는. 딱 1번 씀
    console.log( 'a와 10은 같습니다.')
}

const b = 7
if( b > 10 ){
    console.log( 'b는 10보다 큽니다.')
} else if( b < 10 ){
     console.log( 'b는 10보다 작습니다.')
} else {
    console.log( 'b는 7과 같습니다.')
}

const c = '1'
// 두가지 조건이 true일 때만 and > if(typeof b !== 'string' && b > 1)
// 두 조건 중 하나라도 참일 때 or > if(typeof b !== 'string' || b > 1)
if ( typeof c !== 'string' && c > 1) { //c는 문자열이 아니면서 1보다 큰가요?
    console.log( 'b는 1보다 큽니다.')
} else { //위 조건이 부합하지 않음
    console.log( '뭔지 잘 모르겠음')
} 

//number, string, null, undefined > type 종류
const value = null
if(typeof value === 'string'){ //const value = '집에 가고 싶다' > true
    console.log('value는 문자열')
 } else if( typeof value === 'number'){ //const value = 1 > true
    console.log('value는 숫자열')
} else{
    console.log('뭐임?')
}