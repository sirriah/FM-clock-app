const button = document.getElementById('buttonMore');
let isUp = true;

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (isUp) {
    window.scrollBy(0, window.innerHeight);
    button.innerHTML = 'less <img src="./assets/desktop/icon-arrow-up.svg" alt="" />';
    isUp = false;
  } else {
    window.scrollBy(0, -window.innerHeight);
    button.innerHTML = 'More <img src="./assets/desktop/icon-arrow-up.svg" alt="" />';
    isUp = true;
  }
});

/*
Documentation https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
*/
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    button.innerHTML = 'More <img src="./assets/desktop/icon-arrow-up.svg" alt="" />';
    isUp = true;
  }

  if (document.documentElement.scrollHeight === window.pageYOffset + window.innerHeight) {
    button.innerHTML = 'less <img src="./assets/desktop/icon-arrow-up.svg" alt="" />';
    isUp = false;
  }
});
