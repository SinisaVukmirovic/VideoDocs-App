import { panelElem, searchInputElem, topicsListElem } from './DOMElements.js';

searchInputElem.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        topicsListElem.querySelector('[aria-current]').removeAttribute('aria-current');
        topicsListElem.querySelector('[hidden]').setAttribute('aria-current', true);

        const searchTerm = searchInputElem.value;

        if (!document.startViewTransition) {
            filterVideoDocCards(selectedTopic);
            return;
        }
        document.startViewTransition(() => filterVideoDocCards(searchTerm));
    }
});

const filterVideoDocCards = (searchTerm) => {
    const videoDocCards = panelElem.querySelectorAll('[data-topic]');

    videoDocCards.forEach(card => {
        const cardTopic = card.getAttribute('data-topic');

        if (cardTopic.toLowerCase().includes(searchTerm.toLowerCase())) {
            card.removeAttribute('hidden');
        } else {
            card.setAttribute('hidden', true);
        }
    });

    const warningMsgElem = document.querySelector('[data-warning]');
    const numberOfCardsNotShown = document.querySelector('[data-panel]')
        .querySelectorAll('[hidden]');

    if (videoDocCards.length - numberOfCardsNotShown.length <= 0) {
        warningMsgElem.removeAttribute('hidden');
    } else {
        warningMsgElem.setAttribute('hidden', true);
    }
}