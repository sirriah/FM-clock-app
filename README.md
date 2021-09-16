# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). I am proud to be a PRO!  ❤️‍🔥

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Links

- Solution URL: [Frontendmentor.io](https://www.frontendmentor.io/solutions/clock-app-scss-flexbox-js-spgTo74dQ)
- Live Site URL: [Vercel link](https://fm-clock-app-blond.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS with 7-1 architecture
- Flexbox
- Mobile-first workflow
- ESLint, git


### What I learned

I have worked with the APIs for the first time, and in this challenge there are three at once. 

This is what is written in the propositions:

- [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.
- [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
- [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random programming quotes.
    - If the Programming Quotes API doesn't work, [here's a good alternative quote API](https://github.com/lukePeavey/quotable) you can use instead. It's not programming specific, but it will do the trick.

The hardest part for me was the scroll event. The "day details" section is visible with the button action and after the scrolling too. If user scrolls at the bottom of the page, the button change itself from "more" to the "less". The hardest part for me was to inspect which scroll function returns the right values.

```js
if (document.documentElement.scrollHeight === window.pageYOffset + window.innerHeight) {
    button.innerHTML = 'Less <img src="./assets/desktop/icon-arrow-up.svg" alt="" />';
    button.classList.remove('rotation');
    isUp = false;
  }
```

The interesting part for me was to set up the color theme with the scss. In the mixin.scss you can see the complex setup with the lists and cycles.
It is placed in ./styles/abstracts/_mixins.scss


### Continued development

I would like to study more about scss, especially mixins. I think it is really powerful thing, but I didn't have many chances to practise.


### Useful resources

- [Medium.com Theme and Color scheme - SASS Way](https://medium.com/@sanuthadathil/theme-and-color-scheme-sass-way-a62d68614ef3) - This helped me with the color scheme setup.


## Author

- Frontend Mentor - [@sirriah](https://www.frontendmentor.io/profile/sirriah)
- LinkedIn - [Tereza Fatkova](https://www.linkedin.com/in/tereza-dvorakova-beroun/)


## Acknowledgments

Thank to the [Alex Kim](https://www.frontendmentor.io/profile/Alex-K1m), who helped me with the two silly typos. Yes, now I use linter everytime. :)
Happy coding 👋👩‍🦰


