import { videoDocsData } from '../data/videoDocs.js';

export default function createTopicsList() {
    videoDocsData.forEach(data => {
        console.log(data.topic)
    });
}