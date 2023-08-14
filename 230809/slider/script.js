const prev = document.getElementById('prev')
const next = document.getElementById('next')
const slider = document.querySelector('.slider')
//clientWidth, clientHeight: padding을 포함한 width, height
// ex. size = 600px, border = 10px일 경우, 580px을 보여 줌
//offsetWidth, offsetHeight: padding, border, scrollbar 폭까지 포함한 width, height
const sliderWidth = slider.clientWidth
const child = document.querySelectorAll('.slider-item') //silder의 자식 요소들

// console.log(prev)
// console.log(next)
// console.log(slider)
// console.log(sliderWidth)
// console.log(child)

let index = 0

prev.addEventListener('click',()=>{
    if(index > 0){ //index가 0보다 크면 > 이전 버튼은 어차피 0보다 클 수밖에 없음
        index--
        console.log(index)
        slider.style.transform = `translateX(${-sliderWidth * index}px)`
    } else {
        index = child.length - 1 
        slider.style.transform = `translateX(${-sliderWidth * index}px)`
    }
})

next.addEventListener('click',()=>{
    //만약 index가 child.length보다 작다면 ++
    if(index < child.length - 1){ //0~3까지 나와야 하기에 -1을 적어야 함
        index++
        console.log(index)
        slider.style.transform = `translateX(${-sliderWidth * index}px)` //'translateX('+-sliderWidth * index+'px)'
    } else {
        //index 번호가 마지막 요소와 같다면
        index=0
        slider.style.transform = `translateX(${-sliderWidth * index}px)`
    }
})