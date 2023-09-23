import data from '../data.js';
import dom from '../dom.js';

import addGoHandler from './addGoHandler.js';

const checkScoreHandler = () => {
    let haveWinner = false;
    const allSquares = document.querySelectorAll('.square');

    data.winningCombos.forEach((combo) => {
        const circleWin = combo.every((index) =>
            allSquares[index].firstChild?.classList.contains('circle'),
        );

        if (circleWin) {
            haveWinner = true;

            allSquares.forEach(
                (square) => square.removeEventListener('click', addGoHandler),
                (dom.message.innerHTML = 'Circles win'),
                data.circleCount++,
            );
            return;
        }
    });

    data.winningCombos.forEach((combo) => {
        const crossesWin = combo.every((index) =>
            allSquares[index].firstChild?.classList.contains('cross'),
        );

        if (crossesWin) {
            haveWinner = true;
            allSquares.forEach(
                (square) => square.removeEventListener('click', addGoHandler),
                (dom.message.innerHTML = 'Crosses win'),
                data.crossesCount++,
            );
            return;
        }
    });

    if (
        !haveWinner &&
        Array.from(allSquares).every((square) => square.firstChild)
    ) {
        dom.message.innerHTML = "It's a draw!";
        data.drawsCount++;
    }
};

export default checkScoreHandler;
