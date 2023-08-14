//wrapper에 <span class="snow"></span>을 생성해서 추가
//1, 태그를 생성
// const 변수이름 = document.createElement('span')
// 2. 클래스 추가
// snow.classlist.add('snow')
// 3. wrapper에 삽입
// wrapper.append(snow)
// 해야 할 일
// wrapper에 snow를 100개 추가

const wrapper = document.querySelector('.wrapper')
// const snow = document.createElement('span')
// snow.classList.add('snow')
// wrapper.append(snow)

//for문이 복잡해져서 아예 for문 내용을 addsnow 함수로 만들어 주고
//addsnow 함수를 for문으로 빼서 반복
const addsnow = ()=> {
    const size = `${randomNumber(8,5)}px`
    const snow = document.createElement('span')
    snow.classList.add('snow')
    //left 값을 random으로 1~100%를 할당
    snow.style.left = `${randomNumber(100,1)}%` //randomNumber(100,1)+'%'
    snow.style.animationDuration = `${randomNumber(30,10)}s` //randomNumber(30,10)+'s'
    snow.style.animationDelay = `${randomNumber(10,1)}s` //randomNumber(10,1) +'s'
    snow.style.width = size //width 값과 height 값을 동일하게 주기 위해 위에서 수식을 상수 처리
    snow.style.height = size
    snow.style.filter = `blur(${randomNumber(5,1)}px)` //연산자를 사용하지 않아도 됨`${}` > ${} 안에 있는 애들을 사용함
    snow.style.opacity = Math.random()
    wrapper.append(snow)
}

const randomNumber = (max, min) => { //순서가 뒤지만, 위 일을 처리할 때 참고함
    return Math.floor(Math.random()*(max-min)+min)
}

for(let i=0; i < 100; i++){
    addsnow()
}