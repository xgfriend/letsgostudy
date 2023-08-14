const input = document.getElementById('add-todo')
// console.log(input)
const addButton = document.querySelector('.add-button')
// console.log(addButton)
const list = document.getElementById('list')
// console.log(list)

const addItem =() =>{
    if(!input.value){
        return alert('내용을 입력해 주세요.') //return이 흐름을 한 번 끊어 줌
    }
    //li 요소 생성
    const li = document.createElement('li')
    // console.log(input.value)
    //위처럼 하면 아이콘 x, li 안에 아이콘 추가
    li.innerHTML = `${input.value}<button class="list-delete">&#x2716</button>`
    //li에 list-item 클래스 추가(아이콘이 붙는다)
    li.classList.add('list-item')
    //리스트 ul에 li 추가
    list.append(li)
    //값을 비워준다
    input.value = ''
    input.focus() //추가 버튼을 클릭하고 list 추가 후 바로 input 칸으로 focus
    saveList(list.innerHTML)
}
//JSON.stringify() 문자열 형태로 만들어 줌

input.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        return addItem()
    }
})

addButton.addEventListener('click',()=>{
    addItem()
})

list.addEventListener('click',(e)=>{
    //currentTarget: event가 걸려 있는 대상만 감지
    //target: 클릭한 대상을 감지
    console.log(e.target)
    if(e.target.tagName === "LI"){ //tagName은 무조건 대문자
        //checked 클래스 유무 확인 후 추가 또는 삭제
        e.target.classList.toggle('checked') //toggle = if-else문과 같은 역할
        saveList(list.innerHTML)
    }
    if(e.target.tagName==='BUTTON'){
        e.target.parentElement.remove() //parentElement: 부모의 element를 삭제함
        saveList(list.innerHTML)
    }
})


const saveList = (list)=>{
    localStorage.setItem('todo',JSON.stringify(list.innerHTML)) //개발자도구.application.localstorage에서 'key',value
}

const loadList = () => {
    const getList = JSON.parse(localStorage.getItem('todo'))
    list.innerHTML = getList
}

document.addEventListener('load',loadList())