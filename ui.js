const createGrids = () => {
    // Make 16 columns of 16 divs.
    for (let col = 0; col < 16; col++) {
        const colGrid = document.createElement('div');
        colGrid.classList.add(`grid__row`);

        for (let row = 0; row < 16; row++) {
            const rowGrid = document.createElement('div');
            rowGrid.classList.add('grid__square')

            colGrid.appendChild(rowGrid);
        }

        grid.appendChild(colGrid);
    }
}

// Create a 16 x 16 grid using divs.
const grid = document.querySelector('.grid');

createGrids();

// Creates hover effect.
const gridSquare = document.querySelectorAll('.grid__square');

gridSquare.forEach(square => square.addEventListener('mouseover', () => square.classList.add('grid__hovered')));