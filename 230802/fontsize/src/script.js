//변수는 따옴표로 작성하면 안 됨
const title=document.getElementById('title')
const incButton=document.getElementById('inc')
const decButton=document.getElementById('dec')
console.log(title, incButton, decButton)

//font 기본 사이즈, 가장 초기값
let size = 16; //title.style.fontSize = '16px' 
title.style.fontSize = '40px' //처음 화면도 size 기본값으로 선언한다

title.classList.add('act')
incButton.classList.add('active')
decButton.classList.add('actives')

// 증가 버튼을 눌렀을 때
incButton.addEventListener('click',()=>{
    //기본 size에 1을 더한다
    size = size+1
    //fontsize에 위 size값 적용
    title.style.fontSize=size+'px' //단위를 꼭! 적어 줘야 함 적지 않으면 size 숫자로만 인식
    console.log(size)//+'px' 붙으면 로그에 "'size'px"로 뜸
    title.style.transform='translateX('+size+'px'+')' //translate(25px) > x축으로 이동
    title.style.transform='rotate('+size+'deg'+')' //rotate의 단위는 deg
    //hsl(color Hue, saturation, lightness)
    title.style.color='hsl('+size,'50%,50%)' //색상 변화
})

decButton.addEventListener('click',()=>{
    size = size-5
    title.style.fontSize = size +'px'
}) //한 줄로 모든 걸 작성하고 싶으면 줄바꿈을 ;로 대체, 하지만 최대한 지양