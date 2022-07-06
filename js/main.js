'use strict'
import helpers from './helpers/index.js';
import './sections/index.js';
import './helpers/responsive-manager.js';

const {fetchComponents} = helpers.componentManager;
const {moveSectionById, moveSectionByClassName} = helpers.sectionSelector;
const {waitDOM} = helpers.DOMMutationsDetector;

const dictionary = {
    Inicio: 'home',
    Empresas: 'business',
    Sitios: 'sites',
}

window.addEventListener('load', () => { 
    const sections = [
        {url: '../sections/home/home.html', componentContainerClass: '.home'},
        {url: '../sections/business/business.html', componentContainerClass: '.business'},
        {url: '../sections/sites/sites.html', componentContainerClass: '.sites'},
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
                if(titles[i].className === 'title1'){
                    titles[i].classList.add('active_nav');
                }
                titles[i].addEventListener('click', () => {
                    moveSectionByClassName(dictionary[titles[i].innerText]);
                })
            }
        })
    })
})