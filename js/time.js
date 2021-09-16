/* eslint-disable no-console */
/* eslint-disable camelcase */

/*
World Time API
*/

// the elements from index.html / day details
const detailDayOfWeek = document.getElementById('details__day-of-week');
const detailDayOfYear = document.getElementById('details__day-of-year');
const detailWeekNumber = document.getElementById('details__week-number');
const detailTimezone = document.getElementById('details__timezone');
const greeting = document.getElementById('greeting');
const mainTag = document.getElementById('main');

// the time parts
const timeDigital = document.getElementById('time');

const morningHour = new Date().setHours(5, 0, 0);
const afternoonHour = new Date().setHours(12, 0, 0);
const nightHour = new Date().setHours(18, 0, 0);

let abbreviationGlobal;

// set up day or night style from the mixin and set the greeting
const setStyle = (currentDate) => {
  if (currentDate >= morningHour && afternoonHour > currentDate) {
    greeting.innerHTML = 'Good morning<span class="large-only">, its currently</span>';
    mainTag.classList.add('day');
    mainTag.classList.remove('night');
  } else if (currentDate >= afternoonHour && nightHour > currentDate) {
    greeting.innerHTML = 'Good afternoon<span class="large-only">, its currently</span>';
    mainTag.classList.add('day');
    mainTag.classList.remove('night');
  } else if (currentDate >= nightHour || currentDate < morningHour) {
    greeting.innerHTML = 'Good evening<span class="large-only">, its currently</span>';
    mainTag.classList.remove('day');
    mainTag.classList.add('night');
  }
};

// live time
/*
this is made with the Date object, not with the API time
It is build as live clocks and API method is really slow
*/
const actualTimer = () => {
  const actualTime = new Date();
  const hours = actualTime.getHours().toString();
  let minutes = actualTime.getMinutes().toString();
  // This add the zero before minute value if it is onedigit
  minutes = minutes.length === 1 ? 0 + minutes : minutes;
  // the time object literal, because it contains the abbr
  timeDigital.innerHTML = `<time datetime="${hours}:${minutes}">${hours}:${minutes}<span class="timezone" id="timezone-abbr">${abbreviationGlobal}</span></time>`;
  setTimeout(actualTimer, 60000);
};

// parsing fetched data
function parseDataTime(time) {
// destructuring the fetched object
  const {
    datetime,
    abbreviation,
    day_of_week,
    day_of_year,
    week_number,
    timezone,
  } = time;

  // abbr is global because it is used in the actualTimer()
  abbreviationGlobal = abbreviation;

  // re-format the date object
  setStyle(new Date(datetime));

  // live time
  actualTimer(new Date());

  // filling the elements with data
  detailDayOfWeek.innerHTML = day_of_week;
  detailDayOfYear.innerHTML = day_of_year;
  detailWeekNumber.innerHTML = week_number;
  detailTimezone.innerHTML = timezone;
}

// fetching data
fetch('https://worldtimeapi.org/api/ip')
  .then((data) => data.json())
  .then((time) => parseDataTime(time))
  .catch((err) => console.error(err.message));
