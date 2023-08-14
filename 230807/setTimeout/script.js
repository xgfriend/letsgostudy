// setTimeout(()=>{
//     console.log('1번째')
// }, 1000)
// //settimeout은 지연 시간 설정 > 1000은 1초
// //첫 번째로 입력했지만 입력 지연 시간 때문에 console.log에 순서가 다르게 찍힘

// setTimeout(()=>{
//     console.log('허얼 이게 뭐냐')
// }, 2000)

// console.log('2번째')
// console.log('3번째')

const title = document.querySelector('h1')
// console.log(title)
// setTimeout(()=>{
//     title.style.color = 'red';
//     title.textContent = '빨간색';
// },1000)

const startBtn=document.getElementById('start') //id만 탐색하는 애//
//querySelector로 탐색할 경우에는 #start로 start가 id라는 것을 알려 줘야 함
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
const list = document.getElementById('list')

let index= 0;
let timerId; //선언만 하고 할당을 나중에 해 줌 setInerval에 할당
// console.log(timerId) //'undefined' > 할당해 주지 않았다라고 뜸

startBtn.addEventListener('click',()=>{
    //timerId에 값이 있는지 확인
    if(timerId){
        //timerId에 값이 있다면, clear
        clearInterval(timerId) 
    } //start 버튼을 여러번 눌렀어도 stop 버튼 한 번만 누르면 멈추게끔 해 주는 if문
    //timerId에 새로운 setInterval을 할당
    timerId = setInterval(()=>{ //console.log(timerId) > '1'이 뜬다
        index++
        title.textContent = index
    },10)
    console.log(timerId)
})


stopBtn.addEventListener('click',()=>{
    //timerId에 할당된 setInterval을 지워주는 역할
    clearInterval(timerId)
    console.log(timerId)
    const li = document.createElement('li') //li라는 태그를 creat(생성)함
    const items = list.querySelectorAll('li')
    li.textContent = index //li 값은 index로 부여
    list.append(li) //list라는 id에 li 값을 덧붙임
    items.forEach((element, index)=>{
    console.log('element : '+element)
    console.log('index : ' + index)
    })
})

resetBtn.addEventListener('click',()=>{
    //let은 변수기 때문에 값을 변경할 수 있음 > 0으로 재할당함 > 리셋
    index = 0;
    title.textContent= index
    const items = list.querySelectorAll('li')
    for(let i = 0; i<items.length; i++){
        items[i].remove()
    }
    // items.forEach(item => item.remove()) //위 for문을 간결하게
    //items.forEach((element, index)=>) 기본형//

})





// let index=0;
// setInterval(()=>{
//     //1초마다 1씩 증가
//     index++
//     console.log(index)
// },1000)

// let index = 0;
// //index가 10보다 작다면 증가시킨다
// setInterval(()=>{
//     if(index<10){
//         index++
//         console.log(index)
//     }
// },500)