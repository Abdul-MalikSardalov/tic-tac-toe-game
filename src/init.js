// import your listeners(events)

import data from './data.js';
import dom from './dom.js';

const checkScore = () => {
    let haveWinner = false;
    const allSquares = document.querySelectorAll('.square');

    data.winningCombos.forEach((combo) => {
        const circleWin = combo.every((index) =>
            allSquares[index].firstChild?.classList.contains('circle'),
        );

        if (circleWin) {
            let haveWinner = true;

            allSquares.forEach(
                (square) => square.removeEventListener('click', addGo),
                (dom.message.innerHTML = 'Circles win'),
            );
        }
    });

    data.winningCombos.forEach((combo) => {
        const crossesWin = combo.every((index) =>
            allSquares[index].firstChild?.classList.contains('cross'),
        );

        if (crossesWin) {
            let haveWinner = true;
            allSquares.forEach(
                (square) => square.removeEventListener('click', addGo),
                (dom.message.innerHTML = 'Crosses win'),
            );
        }
    });

    if (
        !haveWinner &&
        Array.from(allSquares).every((square) => square.firstChild)
    ) {
        dom.message.innerHTML = "It's a draw!";
    }
};

const addGo = (e) => {
    dom.message.innerHTML = '';
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(dom.goes);

    dom.goes = dom.goes === 'circle' ? 'cross' : 'circle';
    e.target.append(goDisplay);
    e.target.removeEventListener('click', addGo);

    checkScore();
};

const restartGame = () => {
    dom.restartBtn.addEventListener('click', () => {
        const gameBoard = document.querySelector('.game-board');
        gameBoard.innerHTML = '';

        createCells();
    });
};
const createCells = () => {
    dom.message.innerHTML = 'Circles goes first';
    data.cells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo);
        document.querySelector('.game-board').append(cellElement);
    });

    restartGame();
};

createCells();
