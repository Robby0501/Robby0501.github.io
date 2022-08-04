// Your code here
const table = document.querySelector('table');
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
addRow.addEventListener('click',  makeRow)

const colorChoice = document.querySelector('select')
let colorSelected = 'blue'

function colorize(event) {
    const target = event.target
    if (event.target.tagName === 'TD') {
        if (target.className.length) {
            target.className = target.className
        } else {
           target.className = colorSelected
        }
    }
}

function change(event) {
    colorSelected = event.target.value 
}
colorChoice.addEventListener('change', change)

table.addEventListener('mouseover', colorize)