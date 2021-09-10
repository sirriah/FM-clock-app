/* eslint-disable camelcase */
/*
Location API
*/

const locationCity = document.getElementById('locationCity');

function writeOutData(locationData) {
  const { country_code, city } = locationData;
  locationCity.innerHTML = `${city}, ${country_code}`;
}

fetch('https://freegeoip.app/json/')
  .then((data) => data.json())
  .then((d) => writeOutData(d))
  // eslint-disable-next-line no-console
  .catch((error) => console.error(error.message));
