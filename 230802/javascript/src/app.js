const t1 = document.getElementById('title')
console.log(t1) //따옴표 붙이지 않기 주의
const p1 = document.getElementById('content')
console.log(p1)

//css에서 변경한 내용 javascript에 적용하기
//<p id="content" class = "active">서브문서제공</p> 와 같은 내용
p1.classList.add('active') //서브타이틀 class 리스트에 active(style.css)를 추가하겠다 > 위에 p1으로 서브타이틀 지정

//innerHTML, innerText, textContent
//innerHTML은 태그를 넣을 수 있다
//title.innerHTML = '<span>span 태그 적용</span>'
//title.innerText = '<span>span 태그 적용</span>'
//title.textContent = '<span>span 태그 적용</span>'

//content 내용을 바꿔 보세요
//content.innerHTML = '<span>span 태그 적용</span>'
//content.innerText = '<span>span 태그 적용할게용</span>'
//content.textContent = '<span>span 태그 적용하겟ㅂ니다</span>'

console.log(title.textContent) //textContent는 내용을 가지고 올 때도 사용한다

title.style.color = 'darkblue'
title.style.fontSize = '90px'
title.style.marginTop = '0' //위 여백 0
title.style.marginBottom = '0' //아래 여백 0

content.style.color = 'black' //8에서 active를 추가해 줬으나, 순서대로 진행하기 때문에 마지막 color인 black으로 최종 적용
//다만 css에서 !important 명령어를 사용했기 때문에 우선권에서 밀려 active 색상이 적용됨