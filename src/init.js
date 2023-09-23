import data from './data.js';
import dom from './dom.js';

import restartGameHandler from './handlers/restartGameHandler.js';
import resetResultsHandler from './handlers/resetResultsHandler.js';
import addGoHandler from './handlers/addGoHandler.js';

const createCells = () => {
    dom.message.innerHTML =
        dom.goes === 'circle' ? "O's goes first" : `X's goes first`;

    dom.circleCountDom.innerText = data.circleCount;
    dom.crossesCountDom.innerText = data.crossesCount;
    dom.drawsCountDom.innerText = data.drawsCount;

    data.cells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGoHandler);
        document.querySelector('.game-board').append(cellElement);
    });

    restartGameHandler();
    resetResultsHandler();
};

createCells();

export default createCells;
