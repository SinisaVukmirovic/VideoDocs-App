import { topicsListElem, panelElem } from './DOMElements.js';

export default function filterBySelectedTopic() {
    // getting elems from the DOM after they've been generated
    const topics = topicsListElem.querySelectorAll('[data-topic]');

    topics.forEach(topic => {
        topic.addEventListener('click', (e) => {
            updateStyleOfSelectedTopic(e.target);

            const selectedTopic = e.target.getAttribute('data-topic');
            filterVideoDocCards(selectedTopic);
        });
    });

    const updateStyleOfSelectedTopic = (selectedTopic) => {
        topicsListElem.querySelector('.js-selected').classList.remove('js-selected');
        selectedTopic.classList.add('js-selected');
    }

    // getting elems from the DOM after they've been generated
    const videoDocCards = panelElem.querySelectorAll('[data-topic]');
    // videoDocCards.forEach(card => console.log(card.getAttribute('data-topic')))

    const filterVideoDocCards = (selectedTopic) => {
        videoDocCards.forEach(card => {
            const cardTopic = card.getAttribute('data-topic');
            console.log('card:', cardTopic, 'list:', selectedTopic)

            if (selectedTopic === cardTopic) {
                card.removeAttribute('hidden');
            } else {
                card.setAttribute('hidden', true);
            }
        });
    }
}