const title = document.getElementById('title')
//문자열을 배열로 만듦
const text = title.textContent.split('') //split: 단어를 한 글자씩 떼서 배열로 만들어 줌
console.log(text)

//text > 하나씩 꺼내서 span 태그에 추가
//span 태그로 묶어서 title에 추가
//for문 안에서 해야 할 일
//1. createElement
//2. 추가(append)

title.textContent='' //title에 있는 것을 비워 주자
for(let i = 0; i < text.length; i++){
    const span = document.createElement('span')
    span.append(text[i])
    title.append(span)
    setTimeout(()=>{
        span.classList.add('reveal')
    },i*200)
}


// text.forEach(char => { //한 글자씩 데리고 옴
//     const span = document.createElement('span') //span 태그를 새로 생성
//     span.append(char) //span에 char을 부여
//     console.log(span)
//     title.append(span)
// })