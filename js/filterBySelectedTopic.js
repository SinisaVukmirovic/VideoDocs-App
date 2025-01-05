import { topicsListElem, panelElem, searchInputElem } from './DOMElements.js';
import updateStyleOfSelectedTopic from './updateStyleOfSelectedTopic.js';

export default function filterBySelectedTopic() {
    // getting elems from the DOM after they've been generated
    const topics = topicsListElem.querySelectorAll('[data-topic]');

    topics.forEach(topic => {
        topic.addEventListener('click', (e) => {

            updateStyleOfSelectedTopic(e.target);
            searchInputElem.value = '';

            const selectedTopic = e.target.getAttribute('data-topic');
            
            // filterVideoDocCards(selectedTopic);

            // Fallback for browsers that don't support view transitions:
            if (!document.startViewTransition) {
                filterVideoDocCards(selectedTopic);
                return;
            }
            document.startViewTransition(() => filterVideoDocCards(selectedTopic));
        });
    });

    // getting elems from the DOM after they've been generated
    const videoDocCards = panelElem.querySelectorAll('[data-topic]');

    const filterVideoDocCards = (selectedTopic) => {

    const warningMsgElem = document.querySelector('[data-warning]');

        if (!warningMsgElem.hasAttribute('hidden')) {
            warningMsgElem.setAttribute('hidden', true);
        }

        videoDocCards.forEach(card => {
            const cardTopic = card.getAttribute('data-topic');

            if (selectedTopic.toLowerCase() === cardTopic.toLowerCase()) {
                // changing display value because hidden attribute is not working on display grid or flex elements
                card.removeAttribute('hidden');
            } else {
                card.setAttribute('hidden', true);
            }
        });
    }
}