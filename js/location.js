/*
Location API
*/


fetch('https://reallyfreegeoip.org/json/')
    .then((data) => data.json())
    .then((d) = writeOutData(d))
    .catch((error) => console.log(error.message));


function writeOutData(locationData){
    console.log(locationData);
}