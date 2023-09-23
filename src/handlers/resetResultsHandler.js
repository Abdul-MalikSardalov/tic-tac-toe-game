import data from '../data.js';
import dom from '../dom.js';

const resetResultsHandler = () => {
    if (
        data.circleCount !== 0 ||
        data.crossesCount !== 0 ||
        data.drawsCount !== 0
    ) {
        dom.resetResultsBtn.addEventListener('click', () => {
            dom.circleCountDom.innerText = data.circleCount = 0;
            dom.crossesCountDom.innerText = data.crossesCount = 0;
            dom.drawsCountDom.innerText = data.drawsCount = 0;
        });
    } else {
        return;
    }
};

export default resetResultsHandler;
