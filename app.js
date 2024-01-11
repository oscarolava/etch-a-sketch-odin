const container = document.getElementById("container");

function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    cellDimension = 960 / rows;
    cell.setAttribute('style','width: ' + cellDimension + 'px; height: ' + cellDimension + 'px;')
    container.appendChild(cell).className = "flex-item";
  };
};
makeRows(16, 16);



const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let cantidadGrid = prompt('Inicialice un nuevo grid')
    makeRows(cantidadGrid, cantidadGrid);
    const buttons = document.querySelectorAll('.flex-item');
        buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = "#00FFFF";
    });
});
      });

const buttons = document.querySelectorAll('.flex-item');
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = "#00FFFF";
    });
});