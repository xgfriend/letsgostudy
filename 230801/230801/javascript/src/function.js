function add(happy, y){ //더하기 함수 설계도
    return happy + y; //함수를 적어 줘야 됨 add(여기에)
}
console.log(add(200,2))

function sub(a, b){
    return b - a;
}
console.log(sub(100,1))

function mul(a, b){
    return +a * Number(b)
}
console.log(mul(2, "2"))

function div(a, b){
    return +a / +b
}
console.log(div(3, "3"))

function abcd(a, b){
    return +a % +b
}
console.log(abcd("4", "2"))

const addNumber = function add(a, b){ //상수에 함수를 적을 수 있다
    return +a + +b;
}
console.log(addNumber("24","30"))

//es5.ver
function add(x, y) {
 return x+y;
}
//es6.ver
//fat arrow function
const addES6=(x,y) => {
    return x+y;
}
console.log(addES6(6,7))

const BAE=(x, y) => {
    return x-y
}
console.log(BAE(4,1))

const addfunc = (x, y) => x+y; //더 간단하게 작성 가능
console.log("이렇게 하면 가공 가능합니다 " + addfunc(6, 7))