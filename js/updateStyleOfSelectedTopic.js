import { topicsListElem } from './DOMElements.js';

export default function updateStyleOfSelectedTopic(selectedTopic) {
    topicsListElem.querySelector('.js-selected').classList.remove('js-selected');
    selectedTopic.classList.add('js-selected');
}