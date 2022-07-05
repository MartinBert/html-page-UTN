'use strict'
const fetchComponent = async(url, componentContainerClass) => {
    try{
        const componentContainer = document.querySelector(componentContainerClass);
        const data = await fetch(url);
        const html = await data.text();
        return componentContainer.innerHTML = html;
    }catch(err){
        console.log(componentContainerClass)
        console.log(err)
    }
}

const fetchComponents = (componentToLoadList) => {
    componentToLoadList.forEach(component => {
        fetchComponent(component.url, component.componentContainerClass)
    });
    
}

const fetchHtml = async(fileUrl) => {
    try{
        const data = await fetch(fileUrl);
        return await data.text();
    }catch(err){
        console.log(err)
    }
}

const componentManager = {
    fetchComponent,
    fetchComponents,
    fetchHtml
}

export default componentManager;