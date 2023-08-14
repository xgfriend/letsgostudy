const gridContainer = document.querySelectorAll('.grid-item')
console.log(gridContainer)


//for(초기화; 조건; 증가/감소){}
for(let i = 0; i < gridContainer.length; i++){
    gridContainer[i].addEventListener('click',()=>{
        for(let j = 0; j < gridContainer.length; j++){
            gridContainer[j].classList.remove('active')
        }
        gridContainer[i].classList.add('active')
    })
}