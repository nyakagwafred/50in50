//const loader = document.getElementById('loader')
const text = document.getElementById('text')
const percentage = document.getElementById('percentage')
const header = document.getElementById('header')
let counter = 0
//let percentage = 0


let interval =  setInterval(setWidth, 1000)

function setWidth() {
  document.getElementById('loader').style.width =`${counter}px`
  percentage.textContent=`${Math.ceil((counter/900) * 100)}%`
  counter+=30

  if(counter === 930) {
    clearInterval(interval)
    header.innerHTML = 'Done'
  }

  if(counter < 100 ) {
    text.textContent = 'Initializing...'
  } else if( counter < 300){
    text.textContent = 'Loading Files...'
  }
  else if( counter < 800){
    text.textContent = 'Processing...'
  }
  else if( counter < 900){
    text.textContent = 'Finishing'
  }
  else if(counter > 900 ) {
    text.textContent = 'Completed Successfully. '
  } 
}