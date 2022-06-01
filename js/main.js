'use strict'
import helpers from './helpers/index.js';
import './sections/index.js';
import './helpers/resoponsive-manager.js';

const {fetchComponents} = helpers.componentManager;
const {moveSectionById, moveSectionByClassName} = helpers.sectionSelector;

window.addEventListener('load', () => { 
    const sections = [
        {url: '../sections/home/home.html', componentContainerClass: '.home'},
        {url: '../sections/product/product.html', componentContainerClass: '.product'},
        {url: '../sections/about/about.html', componentContainerClass: '.about'},
        {url: '../sections/contact/contact.html', componentContainerClass: '.contact'},
    ];
    
    fetchComponents(sections)
        const sectionSelector = document.querySelector('.sectionSelector').children;
        sectionSelector[0].addEventListener('click', () => {moveSectionById(sectionSelector[0].className);});
        sectionSelector[1].addEventListener('click', () => {moveSectionById(sectionSelector[1].className);});
        const goHomeButton = document.querySelector('.goHome');
        goHomeButton.addEventListener('click', () => {
            moveSectionByClassName('home');
        })
})