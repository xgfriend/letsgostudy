//var, let, const
// let, const
//do: let 값을 바꿀 수 있다
let username = '홍길동' //따옴표를 하지 않으면 정의되지 않았기에 홍길동이라는 변수를 찾으려고 함 > error
username = '강아지' // let은 정의값을 바꿀 수 있다 변수란 변화하는 값
//don't: const는 값을 바꿀 수 없다.
let name = '고양이'
console.log(username) //F12 개발자 도구 > console

//boolean: 참 또는 거짓
let value = true    
value = false
console.log(value)

//null
//let nullValue; //선언만 해 주고 값을 선언하지 않음
let nullValue = null ;

//undefined
let nudefValue;
//console.log(undefValue)

//number
let numberValue = 11;

//string
let stringValue = '문자열값'

//object
let odjValue= {}

//연산자: +, -, *, /, %(나머지)
let a = 4;
let b = 2;
a+=b //a = a+b
console.log(a)

//증가 연산자, 감소 연산자 > for문 진행할 때 종종 발생
let x=1
const y= x++ //++가 x 앞에 넣느냐, 뒤에 넣느냐 차이가 발생 > 값을 넣고 처리를 하느냐, 처리하고 값을 하느냐
console.log(x, y) // '2, 1'

let valueOne = 2;
let valueTwo = valueOne-- 
console.log(valueOne,valueTwo) // '1, 1' 

