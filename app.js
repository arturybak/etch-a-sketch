let dimensions = 16;
let mode = 'color';

const genButton = document.querySelector('#generate');
genButton.addEventListener('click', function () {
    let input = parseInt(prompt('How many rows/columns?', dimensions));
    (input > 0 && input < 100) ? dimensions = input : alert('The grid has to be 1-99 rows wide');
    generateGrid();
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => generateGrid());


const grid = document.querySelector('.grid');

function changeMode(choice) {
    mode = choice;
    generateGrid();
}

const modes = document.querySelector('.modes');
const modesBtns = modes.childNodes;
modesBtns.forEach(btn => btn.addEventListener('click', () => changeMode(btn.id)));

function colorSquare(square) {
    switch (mode) {
        case 'color':
            square.style.backgroundColor = 'plum';
            break;
        case 'rainbow':
            square.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            break;
        case 'shading':
            let currentColor = square.style.backgroundColor;
            let opacity = Number(currentColor.slice(-4, -1))
            if (opacity < 1) {
                square.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
            }
    }
}

function generateGrid() {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`
    for (let i = 0; i < dimensions * dimensions; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', () => colorSquare(square));
        grid.appendChild(square);
    }
}

generateGrid();

