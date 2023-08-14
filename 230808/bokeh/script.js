const wrapper = document.querySelector('.wrapper')
const randomNumber = (max,min) => {
    return Math.floor(Math.random()*(max-min)+min)
}

const randombokeh = () => {
    const size = `${randomNumber(200,10)}px`
    const bokeh = document.createElement('span') //div나 span는 큰 의미 없는 태그
    bokeh.classList.add('bokeh')
    bokeh.style.left = `${randomNumber(100,1)}%`
    bokeh.style.top = `${randomNumber(100,1)}%`
    // bokeh.style.bottom =`${randomNumber(100,1)}`
    bokeh.style.opacity = Math.random()
    bokeh.style.width = size
    bokeh.style.height = size
    // bokeh.style.filter = `blur(${randomNumber(10,1)}px)`
    bokeh.style.backgroundColor = `hsl(${randomNumber(300,10)},${randomNumber(360,10)}%,${randomNumber(150,10)}%)`
    wrapper.append(bokeh)
}

for(let i = 0; i < 80 ; i++){
    randombokeh()
}