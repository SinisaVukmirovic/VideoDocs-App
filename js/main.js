import populateTopicsList from './populateTopicsList.js';
import populateVideoDocsPanel from './populateVideoDocsPanel.js';
import filterBySelectedTopic from './filterBySelectedTopic.js';
import './filterBySearchedTerm.js';

// ?!?!? this breaks app after refresh in chrome too...?!
document.body.style.cursor = `url(../assets/chalk-cursor.png), auto`;
// ...or not... now works a few days later...
// Does not work when hoasted, png img didnot get loaded?!
// trying these paths
document.body.style.cursor = `url(./assets/chalk-cursor.png), auto`;
document.body.style.cursor = `url(assets/chalk-cursor.png), auto`;


populateTopicsList();
populateVideoDocsPanel();
// must be called here to get generated elems from teh DOM, after their generation
filterBySelectedTopic();