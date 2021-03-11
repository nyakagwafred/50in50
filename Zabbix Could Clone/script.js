
const getTime = () => {
    const date = new Date().toLocaleString('es-CO', { timeZone: 'UTC' })
    const timeEl = document.getElementsByClassName('time') 
    for (let index = 0; index < timeEl.length; index++) {
        const element = timeEl[index].innerHTML =`${date}`;
        
    }
}

const alertDisaster = () => {
    const disasterEl = document.getElementById('problem-disaster')
    .classList.toggle('disaster')
    const mainDisasterEl = document.getElementById('main-disaster')
    .classList.toggle('disaster')
    const mainNotAvailableEl = document.getElementById('not-available')
    .classList.toggle('not-available')
}

const alertWarning = () => {
    const warningEl = document.getElementById('problem-warning')
    warningEl.classList.toggle('warning')
    const mainWarningEl = document.getElementById('main-warning')
    .classList.toggle('warning')
}

const alertHigh = () => {
    const highEl = document.getElementById('problem-high')
    highEl.classList.toggle('high')
    const mainHighEl = document.getElementById('main-high')
    .classList.toggle('high')
}


let timeInterval = setInterval (getTime, 1000)
let disasterInterval = setInterval(alertDisaster, 200)
let warningInterval = setInterval(alertWarning, 1000)
let highInterval = setInterval(alertHigh, 1000)
