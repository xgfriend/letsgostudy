document.getElementById('title') //document에서 Id 기반으로 Element를 get하겠다. 엘리먼트의 이름은 타이틀이다. 아이디 = html에 적은 id title

const title = document.getElementById('title')
console.log(title)

const sub = document.getElementById('subTitle')
console.log(sub)

title.style.color="blue"
subTitle.style.color="rgb(0, 100, 200)" //html에서뿐 아니라 javastript에서도 style 변경 가능
//css와 같은 색상 코드가 똑같다 = css는 색상 모든 속성값이 들어갈 수 있다
title.style.fontSize = '70px'
subTitle.style.fontSize = '80px'
title.innerHTML = '보강 못 듣는 거 실화냐' //html 안에(inner) 있는 title 변경
subTitle.innerHTML = '<span>오 캐신기</span>' //얘는 태그는 태그로 사용함
title.innerText= '<span>innerText로 변경된 제목</span>' //얘와 textContent는 태그를 태그로 인식 안 함
//title.textContent='textContent로 변경된 제목' //javascript는 순서대로 실행하기 때문에 최종적으로 결과값이 됨
subTitle.textContent='<span>textContent로 변경됨</span>'