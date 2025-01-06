import populateTopicsList from './populateTopicsList.js';
import populateVideoDocsPanel from './populateVideoDocsPanel.js';
import filterBySelectedTopic from './filterBySelectedTopic.js';
import './filterBySearchedTerm.js';

// ?!?!? this breaks app after refresh in chrome too...?!
document.body.style.cursor = `url(../assets/chalk-cursor.png), auto`;
// ...or not... now wroks a few days later...

populateTopicsList();
populateVideoDocsPanel();
// must be called here to get generated elems from teh DOM, after their generation
filterBySelectedTopic();