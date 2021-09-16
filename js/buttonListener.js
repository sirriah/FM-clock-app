/*
This is listener for the More/Less button which open/hide the day details
*/

const button = document.getElementById('buttonMore');
let isUp = true;

// this listener is for the click event - it scrolls down or up
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (isUp) {
    window.scrollBy(0, window.innerHeight);
    button.innerHTML = 'Less <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg>';
    button.classList.remove('rotation');
    isUp = false;
  } else {
    window.scrollBy(0, -window.innerHeight);
    button.innerHTML = 'More <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg>';
    button.classList.add('rotation');
    isUp = true;
  }
});

/*
This change the button when user doesn't click, but scroll down or up
If user scrolls at the bottom, the button change the content to "less".
If user scrolls at the top, the button change the content to "more"
Documentation https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
*/
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    button.innerHTML = 'More <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg>';
    button.classList.add('rotation');
    isUp = true;
  }

  if (document.documentElement.scrollHeight === window.pageYOffset + window.innerHeight) {
    button.innerHTML = 'Less <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#303030" cx="20" cy="20" r="20"/><path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6"/></g></svg>';
    button.classList.remove('rotation');
    isUp = false;
  }
});
