'use strict'
import helpers from '../helpers/index.js';

const {fetchComponents} = helpers.componentManager;
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
    title: "Hello1",
    image: "../../assets/images/carousel/image1.jpg",
    alt: "alt1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum veritatis id ex ipsam assumenda commodi iste neque, sunt consequatur, voluptates ut autem! Itaque cumque facilis recusandae odit qui mollitia.1"
  },
  {
    id: 2,
    title: "Hello2",
    image: "../../assets/images/carousel/image2.jpg",
    alt: "alt2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum veritatis id ex ipsam assumenda commodi iste neque, sunt consequatur, voluptates ut autem! Itaque cumque facilis recusandae odit qui mollitia.2"
  },
  {
    id: 3,
    title: "Hello3",
    image: "../../assets/images/carousel/image3.jpg",
    alt: "alt3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum veritatis id ex ipsam assumenda commodi iste neque, sunt consequatur, voluptates ut autem! Itaque cumque facilis recusandae odit qui mollitia.3"
  },
  {
    id: 4,
    title: "Hello4",
    image: "../../assets/images/carousel/image4.jpg",
    alt: "alt4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum veritatis id ex ipsam assumenda commodi iste neque, sunt consequatur, voluptates ut autem! Itaque cumque facilis recusandae odit qui mollitia.4"
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
        cardText.innerHTML = `<p>${cardData.text}</p>`
    }
    setCardData(currentCard);

    const changeCard = () => {
        card.className = 'card card-dark fade-dark fade-opacity-out'
        cardText.innerHTML = '';
        setTimeout(() => {
            card.className = 'card card-light fade-light fade-opacity-in'
            currentCard = (currentCard.id !== 4) ? currentCard = cards.find(cardInList => cardInList.id === currentCard.id + 1) : cards[0];
            setCardData(currentCard);
        }, 475)
    }

    card.addEventListener('click', () => {
        changeCard();
    }) 
})