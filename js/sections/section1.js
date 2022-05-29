'use strict'
import helpers from '../helpers/index.js';

const {fetchComponents} = helpers.componentManager;
const {moveSectionByClassName} = helpers.sectionSelector;
const {waitDOM} = helpers.DOMMutationsDetector;

const components = [
    {url: '../../sections/home/navbar.html', componentContainerClass: '.navbar'},
    {url: '../../sections/home/carousel.html', componentContainerClass: '.carousel'},
]

waitDOM('.navbar').then(() => {
    fetchComponents(components)
    waitDOM('.navbar__titles').then((res) => {
        const titles = res.children;
        for(let i = 0; i < titles.length; i++) {
            titles[i].addEventListener('click', () => {
                moveSectionByClassName(titles[i].innerText);
            })
        }
    })
})
