import { panelElem, searchInputElem, topicsListElem } from './DOMElements.js';
import sortedTopics from './createTopicsValues.js';

searchInputElem.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        topicsListElem.querySelector('[aria-current]').removeAttribute('aria-current');
        topicsListElem.querySelector('[hidden]').setAttribute('aria-current', true);

        const searchTerm = searchInputElem.value.trim();

        if (!document.startViewTransition) {
            filterVideoDocCards(searchTerm);
            return;
        }
        document.startViewTransition(() => filterVideoDocCards(searchTerm));
    }
});

const filterVideoDocCards = (searchTerm) => {
    const videoDocCards = panelElem.querySelectorAll('[data-topic]');
    const warningMsgElem = document.querySelector('[data-warning]');

    if (!warningMsgElem.hasAttribute('hidden')) {
        warningMsgElem.setAttribute('hidden', true);
    }

    videoDocCards.forEach(card => {
        const cardTopic = card.getAttribute('data-topic');

        if (cardTopic.toLowerCase().includes(searchTerm.toLowerCase())) {
            card.removeAttribute('hidden');
        } else {
            card.setAttribute('hidden', true);
        }
    });

    // const warningMsgElem = document.querySelector('[data-warning]');
    const numberOfCardsNotShown = document.querySelector('[data-panel]')
        .querySelectorAll('[hidden]');

    if (searchTerm == '') warningMsgElem.setAttribute('hidden', true);

    if (videoDocCards.length - numberOfCardsNotShown.length < 0 || 
        !sortedTopics.include(searchTerm)) warningMsgElem.removeAttribute('hidden');
}