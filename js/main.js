'use strict'
import helpers from './helpers/index.js';
import './sections/index.js';
import './helpers/responsive-manager.js';

const {fetchComponents} = helpers.componentManager;
const {moveSectionById, moveSectionByClassName} = helpers.sectionSelector;
const {waitDOM} = helpers.DOMMutationsDetector;

window.addEventListener('load', () => { 
    const sections = [
        {url: '../sections/home/home.html', componentContainerClass: '.home'},
        {url: '../sections/product/product.html', componentContainerClass: '.product'},
        {url: '../sections/about/about.html', componentContainerClass: '.about'},
        {url: '../sections/contact/contact.html', componentContainerClass: '.contact'},
        {url: './navbar.html', componentContainerClass: '.navbar'}
    ];
    
    fetchComponents(sections)

    const sectionSelector = document.querySelector('.sectionSelector').children;
    sectionSelector[0].addEventListener('click', () => {moveSectionById(sectionSelector[0].className);});
    sectionSelector[1].addEventListener('click', () => {moveSectionById(sectionSelector[1].className);});
    const goHomeButton = document.querySelector('.goHome');
    goHomeButton.addEventListener('click', () => {
        moveSectionByClassName('home');
    })
        
    waitDOM('.navbar').then(() => {
        waitDOM('.navbar__titles').then((res) => {
            const titles = res.children;
            for(let i = 0; i < titles.length; i++) {
                titles[i].addEventListener('click', () => {
                    moveSectionByClassName(titles[i].innerText);
                })
            }
        })
    })
})