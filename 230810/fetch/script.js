const listContainer = document.querySelector('#list')
// const list = []

// const url = 'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10'

let data;
const url = 'http://randomuser.me/api/?results=10'
//위 링크 끝 숫자(25)는 25개만 불러오는 것 (results, limit)
const fetchData = async ()=>{
    try{
        await fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                return data = json.results})
        data.forEach(element =>{
            console.log(element)
            const li = document.createElement('li')
            li.innerHTML = `
            <figure>
                <img src=${element.picture.medium} alt=${element.name.title}${element.name.first}${element.name.last} />
            </figure>
            <h2>name:${element.name.title} ${element.name.first} ${element.name.last}</h2>`
            listContainer.append(li)
            // const li = document.createElement('li')
            // const img = document.createElement('img')
            // li.textContent = element.title
            // img.src=element.thumbnailUrl
            // li.append(img)
            // listContainer.append(li)
        })
        // list.forEach(item =>{
        //     const li = document.createElement('li')
        //     console.log(item)
        //     li.textContent = item.title
        //     listContainer.append(li)
        // })
    } catch (e) {
        console.error(e)
    }
}
// fetchData() > 받아온 다음에 그리는 역할
// //DOM: Document Object Model
// //DOM이 그려진 이후에 함수 실행
// document.addEventListener('DOMContentLoaded', fetchData())
//DOM, 이미지 등이 전부 로드된 후에 실행
document.addEventListener('load', fetchData())