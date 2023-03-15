const createGrids = (num) => {
    for (let col = 0; col < num; col++) {
        const colGrid = document.createElement('div');
        colGrid.classList.add(`grid__row`);

        for (let row = 0; row < num; row++) {
            const rowGrid = document.createElement('div');
            rowGrid.classList.add('grid__square')

            colGrid.appendChild(rowGrid);
        }

        grid.appendChild(colGrid);
    }
}

const grid = document.querySelector('.grid');

// 16 is default.
createGrids(16);

// Creates hover effect.
const gridSquare = document.querySelectorAll('.grid__square');

gridSquare.forEach(square => square.addEventListener('mouseover', () => square.classList.add('grid__hovered')));