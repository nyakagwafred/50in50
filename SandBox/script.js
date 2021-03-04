const addBtn = document.getElementById('add')
const revertBtn = document.getElementById('revert')
const redBox = document.getElementById('red')
const boxes = document.querySelectorAll('#box div')



addBtn.addEventListener(('click'), () => {
  redBox.style.background = 'red';
  redBox.style.width = '80px';
  redBox.style.height = '80px';
  
})

revertBtn.addEventListener(('click'), () => {
    redBox.style.background = 'silver';
    redBox.style.width = '70px';
    redBox.style.height = '70px';
})


