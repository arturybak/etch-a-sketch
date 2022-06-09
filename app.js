let dimensions = 16;
const genButton = document.querySelector('button');
genButton.addEventListener('click', function () {
    let input = parseInt(prompt('How many rows/columns?', dimensions));
    (input > 0 && input < 100) ? dimensions = input : alert('The grid has to be 1-99 rows wide');
    generateGrid();
});

const grid = document.querySelector('.grid');

function generateGrid() {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`
    for(let i = 0; i < dimensions * dimensions; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', () => square.classList.add('hovered'));
        grid.appendChild(square);
    }    
}

generateGrid();

