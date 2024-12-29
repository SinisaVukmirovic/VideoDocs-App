import { videoDocsData } from '../data/videoDocs.js';
import { panelElem } from './DOMElements.js';

export default function populateVideoDocsPanel() {
    videoDocsData.forEach(data => {
        panelElem.innerHTML += `
            <a href=${data.videoUrl} target="_blank" data-video-doc="topic" class="video-doc-card">
                <h3 class="topic">${data.topic}</h3>
                <h4 class="author">by ${data.author}</h4>
                <h3 class="title">${data.title}</h3>
                <h5 class="duration">duration: ${data.duration}</h5>
            </a>
        `;
    });
}