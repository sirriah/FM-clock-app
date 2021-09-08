/*
Location API
*/


    fetch('https://freegeoip.app/json/')
    .then(dataLocation => dataLocation.json())
    .then(location = console.log(location))
    .catch(err => console.log(err.message));


