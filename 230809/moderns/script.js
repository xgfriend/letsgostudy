// import add from './add.js' //같은 폴더 파일이면 ./ 그 위 폴더면 ../
// import mltiply from './mltiply.js'

// import {add, mltiply} from './math.js'
// //import add, {mltiply as multi} from './math.js
//  // > 함수 이름 as 나만의 별칭 > console.log(별칭(N, N))

import * as math from './math.js'
//모든 걸 가지고 올 때 (별칭: math)

// function add(x, y) {
//     return x+y
// }

//개별적으로 하나씩
// console.log(add(3,4))
// console.log(mltiply(3,4))

//모든 걸 가지고 올 때
// console.log(math.add(6,1))

// //객체 > 중괄호로 묶어 줌
// const person = {
//     //key: value,
//     name: '엘사',
//     age: 27,
// }
// //기본적으로 상수는 바꿀 수 없지만,
// //배열, 객체라는 자료형만 유지된다면 배열, 객체 안의 데이터는 변경되어도 허용된다
// person.name ='올라프' // > 객체라는 형식이 바뀌지 않았기 때문에 내용이 변경됨
// console.log(person.name)

const char = [
    {
        id:0,
        name: '짱구',
        age: 5
    },
    {
        id: 1,
        name: '훈이',
        age: 5
    },
    {
        id: 2,
        name: '철수',
        age: 5
    },
    {
        id: 3,
        name: '맹구',
        age: 5
    },
    {
        id: 4,
        name: '유리',
        age: 5
    },
    {
        id: 5,
        name: '이슬이 누나',
        age: 20
    },
    {
        id: 6,
        name: '형만 씨',
        age: 36
    },
]

// console.log(char.length)

// for(let i = 0; i < char.length; i++){ //() 안에 있는 내용이 forEach 안에 담겨 있음
//     console.log(char[i].name)
// }

// char.forEach(person => {
//     console.log(person.name+'의 나이는 '+person.age+'살입니다.')
// });

const list = document.getElementById('list')
char.forEach(person => {
    const li = document.createElement('li')
    li.textContent = `${person.name}의 10년 뒤 나이는 ${person.age+10}살입니다.`
    list.append(li)
})

// const a ='10'
// const b = 10
// console.log(+a+b)

// const text = ('b'+ 'a' + + 'a' + 'a').toLowerCase() //tolowercase는 다 소문자로 변환하는 수식어
// //+를 붙이면 숫자로 변환하는데, 문자 a를 숫자로 변환하려니 아예 문자기 때문에 NaN가 되고 위 수식어로 소문자 변환
// console.log(text)