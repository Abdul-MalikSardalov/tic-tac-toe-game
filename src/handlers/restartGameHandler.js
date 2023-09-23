import dom from '../dom.js';
import createCells from '../init.js';

const restartGameHandler = () => {
    dom.restartBtn.addEventListener('click', () => {
        const gameBoard = document.querySelector('.game-board');
        gameBoard.innerHTML = '';

        createCells();
    });
};

export default restartGameHandler;
