const button = document.querySelectorAll('.tab-button')
const item = document.querySelectorAll('.tab-item')

console.log(button)

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click',()=>{
        for(let j = 0; j < button.length; j++){
        button[j].classList.remove('selected')
        item[j].classList.remove('show')
    }
        button[i].classList.add('selected')
        item[i].classList.add('show')
    })
}


