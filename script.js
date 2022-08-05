// Your code here
const table = document.querySelector('table');
let grandChildren = table.children
function makeRow () {
    let count = 0;
    const tr = document.createElement('tr');
    while (count < 20) {
        const td = document.createElement('td');
        tr.appendChild(td);     
        count++;
    }
   table.appendChild(tr);  
}

const addRow = document.getElementById('add-row')
const resetButton = document.getElementById('reset-board')
const fillButton = document.getElementById('fill-button')
const colorChoice = document.querySelector('select')
let colorSelected = 'blue'

function colorize(event) {
    const target = event.target
    if (event.target.tagName === 'TD') {
        if (target.className === colorSelected) {
            target.className = 'grey'
        } else {
           target.className = colorSelected
        }
    }
}

function change(event) {
    colorSelected = event.target.value 
}
addRow.addEventListener('click',  makeRow)
colorChoice.addEventListener('change', change)

table.addEventListener('mousedown', function() {
    // colorize(event)
    table.addEventListener('mouseover', colorize)
}) 

table.addEventListener('mouseup', function () {
   table.removeEventListener('mouseover', colorize)
})

const colorArr = Array.from(grandChildren)
// const trChild (colorArr.forEach(tr => tr.children))
function resetBoard() {
       const tdList = Array.from(document.querySelectorAll('td'))
       tdList.forEach(td => td.className = '')
  }
 
 resetButton.addEventListener('click', resetBoard) 

 function fillBoard() {
    const tdList = Array.from(document.querySelectorAll('td'))

    tdList.forEach(td => {
        if (td.className === '') {
        td.className = colorSelected}})
}


fillButton.addEventListener('click', fillBoard) 

//hi
