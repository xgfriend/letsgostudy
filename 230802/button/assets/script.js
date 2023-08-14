const count =document.getElementById('count')
const btn = document.getElementById('button') //btn이란 변수에 'button'이란 id를 담겠다
console.log(btn) //맞게 선언했는지 확인 작업
console.log(count)

let value = 0 //기초값을 0으로 설정 > const로 했을 경우에는 클릭해도 숫자가 변하지 않음
//btn.addEventListner(('click' function(){})
btn.addEventListener('click', ()=>{ //btn을 count로 변경했을 경우 > html(document)의 count를 눌러야 됨
    //console.log('click') //console란에 click한 횟수가 늘어남
    count.textContent = value++ //value 값을 9에서 설정 > btn(button) 클릭했을 때 count의 value 값을 증가
//count.textContent = value+=1과 해도 됨
})

const btn2 = document.getElementById('button2')
console.log(btn2)

btn2.addEventListener('click', ()=>{
    count.textContent = value--
    //count.textContent = value-=1로 해도 됨
})

function add(a,b){
    return a+b
}
console.log(add(2,3))

function sub(a,b){
    return a-b
}
console.log(sub(4,2))

function message(){
    return console.log('오늘따라 배고프다')
}
message() //실행하는 과정, F12에 나타나게 해 줌

const showMessage = ()=>{
    return console.log('이러다 밥 먹고 졸리면 어캄')
}
showMessage()//값을 넣어 주지 않아도 자체적으로 실행하는 함수도 있다

function messagerOne(func){
    return console.log(func)
}
messagerOne(add(3,5))