'use strict'
import helpers from '../helpers/index.js';

const {fetchComponent} = helpers.componentManager;
const {waitDOM} = helpers.DOMMutationsDetector;


waitDOM('.footer')
.then(() => {
    fetchComponent('../sections/contact/footer.html', '.footer');
})