'use strict'
import helpers from '../helpers/index.js';

const {fetchComponents, fetchHtml} = helpers.componentManager;
const {moveSectionByClassName} = helpers.sectionSelector;
const {waitDOM} = helpers.DOMMutationsDetector;

const components = [
    {url: '../../sections/home/navbar.html', componentContainerClass: '.navbar'},
    {url: '../../sections/home/story.html', componentContainerClass: '.story'},
    {url: '../../sections/home/carousel.html', componentContainerClass: '.carousel'},
]

const cards = [
  {
    id: 1,
    title: "Código",
    image: "../../assets/images/carousel/image1.jpg",
    alt: "código",
    text: 
        `Cada sistema, página web o aplicación móvil que utilizamos, se construye con código escrito por algún desarrollador. 
        Dicho código se compone de uno o varios lenguajes de programación.`
  },
  {
    id: 2,
    title: "Lenguajes de programación",
    image: "../../assets/images/carousel/image2.jpg",
    alt: "lenguajes de programación",
    text: 
        `Los lenguajes de programación son lenguajes formales conformados por palabras reservadas y símbolos. 
        Poseen sintaxis especiales y permiten al programador escribir instrucciones con el fin de controlar 
        el comportamiento lógico y físico de una computadora o dispositivo.`
  },
  {
    id: 3,
    title: "Dispositivos",
    image: "../../assets/images/carousel/image3.jpg",
    alt: "dispositivos",
    text:
        `La programación fue avanzando a lo largo de la historia, y en la actualidad, 
        se la utiliza para automatizar tareas y crear sistemas para múltiples dispositivos. 
        Esto repercute positivamente en la demanda mundial de desarrolladores, 
        pues el área de sistemas se volvió un pilar fundamental de las empresas modernas que desean optimizar sus procesos.`
  },
  {
    id: 4,
    title: "Desarrolladores",
    image: "../../assets/images/carousel/image4.jpg",
    alt: "desarrolladores",
    text: 
        `Los desarrolladores son las personas que hacen posible la solución de problemas mediante la programación, 
        las áreas de especialización para sus tareas se fueron diversificando y actualmente hay muchísimas categorías.`
  },
];

let currentCard = cards[0];

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

waitDOM('.card').then(card => {
    const cardText = document.querySelector('.card-text');
    const setCardData = (cardData) => {
        card.innerHTML = `
            <h1>${cardData.title}</h1> 
            <img src="${cardData.image}" alt="${cardData.alt}" style="width: 100%; height: 100;">
        `
        cardText.innerHTML = `<div>${cardData.text}</div>`
    }
    setCardData(currentCard);

    const changeCard = async() => {
        card.className = 'card card-dark fade-dark fade-opacity-out'
        cardText.className = 'card-text fade-opacity-out'
        cardText.innerHTML = '<div>' + await fetchHtml('../../sections/home/spinner.svg') + '</div>';
        setTimeout(() => {
            card.className = 'card card-light fade-light fade-opacity-in'
            cardText.className = 'card-text fade-opacity-in'
            currentCard = (currentCard.id !== 4) ? currentCard = cards.find(cardInList => cardInList.id === currentCard.id + 1) : cards[0];
            setCardData(currentCard);
        }, 475)
    }

    card.addEventListener('click', () => {
        changeCard();
    })

    cardText.addEventListener('click', () => {
        changeCard();
    })
})