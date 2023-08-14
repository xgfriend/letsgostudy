const dataList = document.querySelectorAll('[data-counter]')
console.log(dataList)

// for(let i=0; i < dataList.length; i++){
//     //'dataset' === 'data-'
//     const target = dataList[i].dataset.counter
//     let index = 0
//     const timer = dataList[i].querySelector('.timer')
//     const step = Math.floor(target/200)
//     //index가 target이 될 때까지 증가
//     //setInterval
//     //ex. target: 3600, index가 3600이 될 때까지 증가
//     setInterval(() =>{
//         if(index < target){
//             index=index+step
//             // console.log(index)
//             timer.textContent = index
//         }
//     },1)
// }

dataList.forEach(timerTime=>{
    let index = 0
    const timer = timerTime.querySelector('.timer')
    const target = timerTime.dataset.counter
    const step = Math.floor(target/200)
    setInterval(() =>{
        if(index < target){
            index=index+step
            // console.log(index)
            timer.textContent = index
        }
    },1)
})