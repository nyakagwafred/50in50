//Variable initialization
let clickTime = 0 
let timesClicked = 0

document.querySelector('.loveMe').addEventListener('click', (e) => {
    if(clickTime === 0){
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800){
            createHeart(e)
            clickTime = 0
        } else {
           clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    xInside = x - leftOffset
    yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    document.querySelector('.loveMe').appendChild(heart)

    times.innerHTML = ++timesClicked
}