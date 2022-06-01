'use strict';
const screenSize = window.screen.width;
const xs = (screenSize >= 360 && screenSize < 768);
const sm = (screenSize >= 768 && screenSize < 992);
const md = (screenSize >= 992 && screenSize < 1200);
const lg = (screenSize >= 1200 && screenSize < 1600);
const xl = (screenSize >= 1600)
const scales = ['xs', 'sm', 'md', 'lg', 'xl'];

class ResponsiveData {
    scale;
    scaleWithoutEffect;
    elementsToResize;

    constructor(scale){
        this.scale = scale;
        this.scaleWithoutEffect = scales.filter(el => el !== scale);
        this.elementsToResize = document.querySelectorAll(`[${scale}]`);
    }
}

const modifyClasses = (responsiveScale) => {
    const {scale, scaleWithoutEffect, elementsToResize} = new ResponsiveData(responsiveScale);
    for(let i = 0; i < elementsToResize.length; i++) {
        scaleWithoutEffect.forEach(attribute => {
            const classPresent = elementsToResize[i].getAttribute(attribute);
            if(classPresent) elementsToResize[i].classList.remove(classPresent);
        })
        elementsToResize[i].classList.add(elementsToResize[i].getAttribute(scale));
    }
}

const resize = () => {
    if(xs){
        modifyClasses('xs');
    }
    if(sm){
        modifyClasses('sm');
    }
    if(md){
        modifyClasses('md');
    }
    if(lg){
        modifyClasses('lg');
    }
    if(xl){
        modifyClasses('xl');
    }
}

setTimeout(() => {
    resize();
},100)