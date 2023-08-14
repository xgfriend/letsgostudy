const lis = document.querySelectorAll('li')
console.log(lis)

for(let i = 0; i < lis.length; i++){
    lis[i].addEventListener('click',()=>{
        for(let j = 0; j < lis.length; i++){
            lis[j].classList.remove('active')
        }
        lis[i].classList.add('active')
    })
}