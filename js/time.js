/*
World Time API 
*/

// the elements from index.html / day details
const detailDayOfWeek = document.getElementById("details__day-of-week");
const detailDayOfYear = document.getElementById("details__day-of-year");
const detailWeekNumber = document.getElementById("details__week-number");
const detailTimezone = document.getElementById("details__timezone");
// the time parts
const timeDigital = document.getElementById("time");
const timeAbbr = document.getElementById("timezone-abbr");


//fetching data
fetch("https://worldtimeapi.org/api/ip")
  .then((data) => data.json())
  .then((time) => parseDataTime(time))
  .catch((err) => console.log(err.message));



function parseDataTime(time) {
// destructuring the fetched object
  const {
    datetime,
    abbreviation,
    client_ip,
    day_of_week,
    day_of_year,
    week_number,
    timezone,
  } = time;

//setClientIP(client_ip);

// re-format the date object
  const timeNumbers = new Intl.DateTimeFormat("cs-CZ", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(datetime));

  // the time object literal
  timeDigital.innerHTML = `<time datetime="${timeNumbers}" id="time">${timeNumbers}<span class="timezone" id="timezone-abbr">${abbreviation}</span></time>`;

  // filling the elements with data
  timeAbbr.innerHTML = abbreviation;
  detailDayOfWeek.innerHTML = day_of_week;
  detailDayOfYear.innerHTML = day_of_year;
  detailWeekNumber.innerHTML = week_number;
  detailTimezone.innerHTML = timezone;
}


