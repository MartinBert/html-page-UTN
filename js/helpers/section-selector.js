'use strict'
const displayOrNotGoToHomeButton = () => {
    if(currentSection.id === 1){
        document.querySelector('.goHome').classList.add('hidden')
    }else{
        document.querySelector('.goHome').classList.remove('hidden')
    }
}

const allSections = [
    {id: 1, name: 'home'},
    {id: 2, name: 'product'},
    {id: 3, name: 'about'},
    {id: 4, name: 'contact'},
]

let currentSection = allSections[0];
displayOrNotGoToHomeButton();

const moveSectionById = (direction) => {
    const upSection = (currentSection.id === 1) ? allSections[0] : allSections.find(section => section.id === currentSection.id - 1);
    const downSection = (currentSection.id === 4) ? allSections[3] : allSections.find(section => section.id === currentSection.id + 1);
    currentSection = (direction === 'up') ? upSection : downSection;
    displayOrNotGoToHomeButton();
    return document.getElementById((direction === 'up') ? upSection.id : downSection.id).scrollIntoView({ behavior: 'smooth' });
}

const moveSectionByClassName = (sectionClassName) => {
    const sectionToMove = allSections.find(section => section.name === sectionClassName.toLowerCase());
    currentSection = sectionToMove;
    displayOrNotGoToHomeButton();
    return document.querySelector(`.${sectionToMove.name}`).scrollIntoView({ behavior: 'smooth' });
}

const sectionSelector = {
    moveSectionById,
    moveSectionByClassName
}

export default sectionSelector;