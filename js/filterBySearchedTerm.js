import { panelElem, searchInputElem } from './DOMElements.js';

searchInputElem.addEventListener('keypress', (e) => {
    e.preventDefault();

    if (e.key === 'Enter') {
        console.log(searchInputElem.value);
    }
});
searchInputElem.value = '';

// export default function filterBySearchTerm(e) {
        
    //     const searchTerm = searchInputElem.value;

    // const topics = topicsListElem.querySelectorAll('[data-topic]');



    // const searchTerm = searchInputElem.value;
    // console.log(searchTerm)
// }