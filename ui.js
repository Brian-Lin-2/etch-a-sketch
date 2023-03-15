const createGrids = () => {
    // Make 16 columns of 16 divs.
    for (let col = 0; col < 16; col++) {
        const colGrid = document.createElement('div');
        colGrid.classList.add(`grid__row${col}`);

        for (let row = 0; row < 16; row++) {
            const rowGrid = document.createElement('div');
            grid.appendChild(rowGrid);
        }

        grid.appendChild(colGrid);
    }
}

// Create a 16 x 16 grid using divs.
const grid = document.querySelector('.grid');

createGrids();