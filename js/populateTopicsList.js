import sortedTopics from './createTopicsValues.js';

const topicsListElem = document.querySelector('[data-topics]');

export default function populateTopicsList() {
    sortedTopics.forEach(topic => {
        const li = document.createElement('li');
    
        li.innerHTML = `
            <li data-topic='${topic}'>
                ${topic}
            </li>
        `;
    
        topicsListElem.append(li);
    });
}
