import populateTopicsList from './populateTopicsList.js';
import populateVideoDocsPanel from './populateVideoDocsPanel.js';
import filterBySelectedTopic from './filterBySelectedTopic.js';

// ?!?!? this breaks app after refresh in chrome too...
// document.body.style.cursor = `url(../assets/chalk-2.png), auto`;

populateTopicsList();
populateVideoDocsPanel();

filterBySelectedTopic();