// window.addEventListener('mousemove',(event)=>{ //event = e = evt
//     //.dot의 좌표를 clientX, ClientY로 할당
//     console.log('마우스의 X 좌표: '+event.clientX)
//     console.log('마우스의 Y 좌표: '+event.clientY)
// })

// const dot = document.querySelector('.dot') //html에 있는 class를 불러 올 때는 무조건 .을 찍어야 한다
// window.addEventListener('mousemove',(event)=>{
//     // const clientX = event.clientX
//     // const clientY = event.clientY
//     // dot.style.left = `${clientX}px`
//     // dot.style.top = `${clientY}px`
//     dot.style.left = event.clientX-(dot.clientWidth/2)+'px'
//     dot.style.top = event.clientY-(dot.clientHeight/2)+'px'
// })


const dot = document.querySelector('.dot') //html에 있는 class를 불러 올 때는 무조건 .을 찍어야 한다
window.addEventListener('mousemove',(event)=>{
    requestAnimationFrame(()=>mousemove(event)) //frame 단위로 움직이려고 노력한다
})
const mousemove = (event)=>{
    dot.style.left = event.clientX-(dot.clientWidth/2)+'px'
    dot.style.top = event.clientY-(dot.clientHeight/2)+'px'
}

// const body = document.querySelector('body')

window.addEventListener('click',() => {
    const span = document.createElement('span')
    span.classList.add('bubble')
    dot.append(span)
    setTimeout(()=>{
        span.remove() //animation: bubble 200ms forwards linear; 200ms보다는 길어야 자연스러움
    },1000)
})