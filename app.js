const grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = `repeat(16, 1fr)`
// grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
grid.style.gridTemplateRows = `repeat(16, 1fr)`

for(let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', () => square.classList.add('hovered'));
    grid.appendChild(square);
}