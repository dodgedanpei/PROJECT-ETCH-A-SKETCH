const container = document.getElementById('container');
let rows = document.getElementsByClassName('row');
let cells = document.getElementsByClassName('cell');
const resetButton = document.getElementById('reset');
const squareNumber = document.getElementById('squareNum');
const color = document.getElementById('color');

var squareQty = 16

const createGrid = () => {
    for (i = 0; i < squareQty; i++){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        container.appendChild(newRow);
        for (j = 0; j < squareQty; j++){
           let newCell = document.createElement('div');
           newCell.classList.add('cell') ;
           let gridSize = `${600/squareQty}px`;
           newCell.style.width = gridSize;
           newCell.style.height = gridSize;
           newRow.appendChild(newCell);
        }
    }
    colorIn();
}

const deleteGrid = () => {
    container.innerHTML = '';
}

const colorIn = () => {
    const grids = document.querySelectorAll('.cell');
    grids.forEach(grid => grid.addEventListener('mouseover', function(e) {
    e.target.style.background = color.value;
}))
}



function resetFunction() {
    console.log('reset');
    userAmount = prompt('How many squares per side for new grid?');
    if(userAmount > 100){
        squareQty = 100;
        squareNumber.innerText = 100*100;
    } else {
        squareQty = userAmount;
        squareNumber.innerText = userAmount*userAmount;
    }
  }

resetButton.addEventListener('click', function() {
    resetFunction();
    deleteGrid();
    createGrid();
});

createGrid();