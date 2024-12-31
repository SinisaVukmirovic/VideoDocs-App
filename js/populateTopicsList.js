import sortedTopics from './createTopicsValues.js';
import { topicsListElem } from './DOMElements.js';

export default function populateTopicsList() {
    sortedTopics.forEach(topic => {
        topicsListElem.innerHTML += `
            <li data-topic='${topic}'>
                ${topic}
            </li>
        `;
    });
}
