import { topicsListElem, panelElem } from './DOMElements.js';
import updateStyleOfSelectedTopic from './updateStyleOfSelectedTopic.js';

export default function filterBySelectedTopic() {
    // getting elems from the DOM after they've been generated
    const topics = topicsListElem.querySelectorAll('[data-topic]');

    topics.forEach(topic => {
        topic.addEventListener('click', (e) => {
            updateStyleOfSelectedTopic(e.target);

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

    // const updateStyleOfSelectedTopic = (selectedTopic) => {
    //     topicsListElem.querySelector('.js-selected').classList.remove('js-selected');
    //     selectedTopic.classList.add('js-selected');
    // }

    // getting elems from the DOM after they've been generated
    const videoDocCards = panelElem.querySelectorAll('[data-topic]');

    const filterVideoDocCards = (selectedTopic) => {
        videoDocCards.forEach(card => {
            const cardTopic = card.getAttribute('data-topic');

            if (selectedTopic === cardTopic) {
                // changing display value because hidden attribute is not working on display grid or flex elements
                card.removeAttribute('hidden');
            } else {
                card.setAttribute('hidden', true);
            }
        });
    }
}