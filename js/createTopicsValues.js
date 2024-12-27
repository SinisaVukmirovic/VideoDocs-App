import { videoDocsData } from '../data/videoDocs.js';

let sortedTopics;

const getTopicsValues = () => {
    let allTopics = [];

    videoDocsData.forEach(data => {
        allTopics = [...allTopics, data.topic];
    });

    makeUniqueTopicsValues(allTopics);
}
const makeUniqueTopicsValues = (allTopics) => {
    const uniqueTopicsValues = new Set(allTopics);

    handleSortingOfTopics(uniqueTopicsValues)
}

const handleSortingOfTopics = (uniqueTopicsValues) => {
    sortedTopics = Array.from(uniqueTopicsValues)
                .sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}

getTopicsValues();

export default sortedTopics;