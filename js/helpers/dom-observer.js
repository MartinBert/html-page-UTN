'use strict';
const waitDOM = (selector) => {
    return new Promise((resolve) => {
      let el = document.querySelector(selector);
      if (el) {
        resolve(el); 
        return
      }
      new MutationObserver((mutationRecords, observer) => {
        Array.from(document.querySelectorAll(selector)).forEach((element) => {
          resolve(element);
          observer.disconnect();
        });
      })
        .observe(document.documentElement, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: false,
            attributeOldValue: false,
            characterDataOldValue: false
        });
    });
}

const DOMMutationsDetector = {
    waitDOM
}

export default DOMMutationsDetector;