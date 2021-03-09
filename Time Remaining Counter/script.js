const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const milliseconds = document.getElementById('milliseconds')

interval = setInterval(updateMilliseconds, 1)

let secondCounter = 0
let minuteCounter = 0
let hourCounter = 0
let millisecondCounter = 0

function updateMilliseconds() {
    millisecondCounter++
    milliseconds.innerText = `${millisecondCounter}`
    if(millisecondCounter === 1000 ){
        millisecondCounter = 0
        updateSeconds()
    }

}

function updateSeconds() {
    seconds.innerText = `${secondCounter}`
    secondCounter++
    if(secondCounter === 60){
        secondCounter = 0
        updateMinutes()
    }
}

function updateMinutes() {
    minuteCounter++
    minutes.innerText = `${minuteCounter}`
    if(minuteCounter === 60) {
        minuteCounter = 0
        updateHours()
    }
}

function updateHours() {
    hourCounter++
    hours.innerText = `${hourCounter}` 
}






