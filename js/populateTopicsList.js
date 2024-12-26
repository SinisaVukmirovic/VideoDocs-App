import sortedTopics from './createTopicsValues.js';

const topicsListElem = document.querySelector('[data-topics]');

export default function populateTopicsList() {
    sortedTopics.forEach(topic => {
        topicsListElem.innerHTML += `
            <li data-topic='${topic}'>
                ${topic}
            </li>
        `;
    });
}
