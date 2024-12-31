import { videoDocsData } from '../data/videoDocs.js';
import { panelElem } from './DOMElements.js';

let viewTransitionCounter = 0;

export default function populateVideoDocsPanel() {
    videoDocsData.forEach(data => {
        panelElem.innerHTML += `
            <a href=${data.videoUrl} target="_blank" data-topic=${data.topic} class="video-doc-card" 
            style="view-transition-name: videoDocCard-${++viewTransitionCounter}">
                <h3 class="topic">${data.topic}</h3>
                <h4 class="author">by ${data.author}</h4>
                <h3 class="title">${data.title}</h3>
                <h5 class="duration">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="var(--secondary-text)"><path d="M12.5 7.25a.75.75 0 00-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 00.744-1.302L12.5 12.315V7.25z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg> ${data.duration}
                </h5>
            </a>
        `;
    });
}