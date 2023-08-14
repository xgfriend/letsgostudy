const brand = document.querySelector('.container')
console.log(brand)

const item = document.querySelectorAll('.item')
console.log(item)

for(let i=0; i < item.length; i++){
    item[i].addEventListener('click',()=>{
        //모든 요소에서 active를 제거 후 > 제거하는 for문
        for(let j=0; j<item.length; j++){
        item[j].classList.remove('active')
        } 
        //현재 클릭한 요소한테만 active
        item[i].classList.add('active')
})
}
