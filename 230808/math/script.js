//pi
console.log(Math.PI) 
//절대값
console.log(Math.abs(1)) 
console.log(Math.abs(-1))
console.log(Math.abs('-1'))
//round, 반올림, 소수점 이하를 반올림
console.log(Math.round(1.4))
console.log(Math.round(4.6))
console.log(Math.round(-6.7))
//ceil, 올림, 소수점 이하를 올림
console.log(Math.ceil(1.2))
console.log(Math.ceil(-0.2))
//floor, 버림, 소수점 이하를 버림
console.log(Math.floor(1.7))
console.log(Math.floor(1.99999))
console.log(Math.floor(-4.5))
//random, 난수, 랜덤 숫자, 0~1 미만
// console.log(Math.random())
const random = Math.floor(Math.random()*5+1) // 1~5 사이
console.log(random)

let max = 8
let min = 3
const random2 = Math.floor(Math.random()*(max-min +1)+min) //+1이 없으면 3~7 사이의 값만 나옴
console.log(random2)