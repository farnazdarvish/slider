const img = document.querySelectorAll('.image>figure')
const image = document.querySelector('.image')
const slider = document.querySelector('.slider')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
let width = slider.clientWidth
let turn = 0
const body = document.querySelector('body')

img.forEach((val) => {
    val.style.width = width + 'px'
})

image.style.width = ((img.length) * width) + 'px'


next.addEventListener('click', () => {
    if (turn < img.length - 1) {
        turn++
        body.style.backgroundImage = 'linear-gradient(to bottom,#042d16 ,#c0ead3)'
        if(turn==2){
            body.style.backgroundImage = 'linear-gradient(to bottom,#3f2d07 ,#dbc8a2)'
 
        }
        
    } else {
        turn = 0
        body.style.backgroundImage = 'linear-gradient(to bottom,#07384f ,#8ab8ce)'

    }
    image.style.left = -(turn * width) + 'px'
})

back.addEventListener('click', () => {
    if (turn != 0) {
        turn--
    } else {
        turn = img.length - 1
    }
    image.style.left = -(turn * width) + 'px'
})



