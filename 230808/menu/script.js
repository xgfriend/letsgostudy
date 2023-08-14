const menu = ['짜장면','짬뽕밥','콩국수','김밥']
// console.log(menu[0])
// console.log(menu[Math.floor(Math.random()*4)])

// let random = Math.floor(Math.random()*4)

const button = document.getElementById('button')
const result = document.getElementById('menu')
button.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*menu.length) //누를 때마다 번호 생성
    result.textContent = menu[random]
})