import dom from '../dom.js';

import checkScoreHandler from './checkScoreHandler.js';

const addGoHandler = (e) => {
    dom.message.innerHTML = '';

    const goDisplay = document.createElement('div');
    goDisplay.classList.add(dom.goes);

    dom.goes = dom.goes === 'circle' ? 'cross' : 'circle';

    e.target.append(goDisplay);
    e.target.removeEventListener('click', addGoHandler);

    checkScoreHandler();
};

export default addGoHandler;
