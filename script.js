document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('sketch-container');
    const colorButton = document.getElementById('color');
    const sizeButton = document.getElementById('size');
    const eraserButton = document.getElementById('eraser');
    const clearButton = document.getElementById('clear');
    let color = 'black';
    let gridSize = 16;

    let isDrawing = false;

    function createGrid(size) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            container.appendChild(cell);
        }
    }

    container.addEventListener('mousedown', (event) => {
        isDrawing = true;
        changeColor(event);
    });

    container.addEventListener('mousemove', (event) => {
        if (isDrawing) {
            changeColor(event);
        }
    });

    container.addEventListener('mouseup', (event) => {
        isDrawing = false;
    });

    function changeColor(event) {
        if (event.target !== container) {
            event.target.style.backgroundColor = color;
        }
    }

    createGrid(gridSize);

    function clearGrid() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    const colorPicker = document.getElementById('color-picker');
    const sizeSlider = document.getElementById('size-slider');
    const colorValue = document.getElementById('color-value');

    colorPicker.addEventListener('input', (event) => {
        color = event.target.value;
        colorValue.textContent= `${color}`;
    });

    const sizeOutput= document.getElementById('size-value');

    sizeSlider.addEventListener('input', (event) => {
        gridSize = parseInt(event.target.value);
        sizeOutput.value = gridSize;
        clearGrid();
        createGrid(gridSize);
    });

    eraserButton.addEventListener('click', (event) => {
        color = 'white';
    });

    clearButton.addEventListener('click', (event) => {
        clearGrid();
        createGrid(gridSize);
    });

    createGrid(gridSize);
});