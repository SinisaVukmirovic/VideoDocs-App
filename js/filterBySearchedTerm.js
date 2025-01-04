import { panelElem, searchInputElem } from './DOMElements.js';

searchInputElem.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

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
            // changing display value because hidden attribute is not working on display grid or flex elements
            card.removeAttribute('hidden');
        } else {
            card.setAttribute('hidden', true);
        }
    });
}