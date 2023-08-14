let variables; //초기화시킴
console.log(variables) //"undefined"

let v2 = 'c344' 
let v3 = v2 + '이렇게 쓰면 원래 변수에서 가공해서 쓸 수 있음!'
console.log(v3)

const name="일 가기 싫다"
console.log(name)
const gray="집에 바로 가고 싶다"
console.log(gray)
const time="지금 시간은 2:22"
console.log(time)
const number1 = 1
const number2 = "2" /*괄호+숫자는 텍스트로 치환*/
const result = number1+number2 // "22"
console.log(result) /*더하기가 아닌 옆으로 나열(오류로 인식하지 않음)*/
/**
 * 주석을 여러 줄에 걸쳐서
 * 작성할 때는 이렇게 씁니다
 */
//메모장에 메모한다고 알려 주시는 건가
//우와 한 줄로~ 작성~
const n3 = 5
const n4 = "3"
const result2= n3-n4
console.log(result2)
const result3= n3*n4
const result4= n3/n4
console.log(typeof result3) //typeof 형질
console.log(result4)
const result5=n3 % n4 //나머지 구하는 연산자
console.log(result5) 
//const n3 = "3" > 형변환 Number(n3) = 3으로 인식 or +n3
const us = 1
const me = "3"
const together = us + Number(me) //무조건 N은 대문자
console.log(together)
const to = us + +me
console.log(together)