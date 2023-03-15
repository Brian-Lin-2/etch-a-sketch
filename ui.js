const grid = document.querySelector('.grid');

const createGrids = (num) => {
    // Remove any old grids.
    grid.innerHTML = '';

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

     // Creates hover effect.
     const gridSquare = document.querySelectorAll('.grid__square');

     gridSquare.forEach(square => square.addEventListener('mouseover', () => square.classList.add('grid__hovered')));
}

const sizeChange = () => {
    let newSize = prompt("How many rows?");

    if (newSize <= 0 || newSize > 64) {
        alert("Must be between 0 and 64.");
    } else {
        createGrids(newSize);
    }
}

// 16 is default.
createGrids(16);

// Changes grid size.
const changeSize = document.querySelector('.sketchpad__button');

changeSize.addEventListener('click', sizeChange);