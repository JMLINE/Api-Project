const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
const key = "99cc9e5aba3ab0d86e7ff0ffbfb4521c/";



const searchForm = document.querySelector('form');
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const level = document.querySelector("level");
const city = document.querySelector("city");
const weather = document.querySelector("weather");
const pic = document.querySelector("pic");


const searchLa = document.getElementById("losAngeles");
const searchNy = document.getElementById("nyc");
const searchPa = document.getElementById("paris");
const searchLon = document.getElementById("london");


searchForm.addEventListener('submit', fetchResults);



function fetchResults(e) {
    e.preventDefault();
    let url = baseUrl + key + latitude.value + "," + longitude.value;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            displayResults(json)

        }, )


    function displayResults(json) {
        /*  let city_state = document.createElement("li");
          city_state.innerText = json.timezone;
          city.appendChild(city_state);

          let temp = document.createElement("li");
          temp.innerText = Math.floor(json.currently.temperature) + ("°F");
          level.appendChild(temp);

          let sum = document.createElement("li")
          sum.innerText = json.currently.summary;
          weather.appendChild(sum);

            let icon = document.createElement("li")
        icon.innerHTML =
          `<img src="images/${json.currently.icon}.png" width=100px height =100px />`;
        pic.appendChild(icon)*/


        document.getElementById("level").innerHTML = `${Math.floor(json.currently.temperature) + ("°F")}`;
        document.getElementById("weather").innerHTML = `${json.currently.summary}`;
        document.getElementById("city").innerHTML = `${json.timezone}`;
        document.getElementById("pic").innerHTML = `<img src="images/${json.currently.icon}.png" width=100px height =100px />`;
    }

}
////Los Angeles Function

searchLa.addEventListener('click', fetchLosAngeles);

function fetchLosAngeles(e) {
    e.preventDefault();
    let urlLa = baseUrl + key + 34.0522 + "," + -118.2437;

    fetch(urlLa)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            displayLosAngeles(json)


        }, )
}

function displayLosAngeles(json) {

    document.getElementById("level").innerHTML = `${Math.floor(json.currently.temperature) + ("°F")}`;
    document.getElementById("weather").innerHTML = `${json.currently.summary}`;
    document.getElementById("city").innerHTML = `${json.timezone}`;
    document.getElementById("pic").innerHTML = `<img src="images/${json.currently.icon}.png" width=100px height =100px />`;
}

////New York Function

searchNy.addEventListener('click', fetchNyc);

function fetchNyc(e) {
    e.preventDefault();
    let urlNyc = baseUrl + key + 40.7128 + "," + -74.0060;

    fetch(urlNyc)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            displayNyc(json)


        }, )
}

function displayNyc(json) {

    document.getElementById("level").innerHTML = `${Math.floor(json.currently.temperature) + ("°F")}`;
    document.getElementById("weather").innerHTML = `${json.currently.summary}`;
    document.getElementById("city").innerHTML = `${json.timezone}`;
    document.getElementById("pic").innerHTML = `<img src="images/${json.currently.icon}.png" width=100px height =100px />`;
}


/////Paris Function

searchPa.addEventListener('click', fetchParis);

function fetchParis(e) {
    e.preventDefault();
    let urlPa = baseUrl + key + 48.8566 + "," + -2.3522;

    fetch(urlPa)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            displayParis(json)


        }, )
}

function displayParis(json) {

    document.getElementById("level").innerHTML = `${Math.floor(json.currently.temperature) + ("°F")}`;
    document.getElementById("weather").innerHTML = `${json.currently.summary}`;
    document.getElementById("city").innerHTML = `${json.timezone}`;
    document.getElementById("pic").innerHTML = `<img src="images/${json.currently.icon}.png" width=100px height =100px />`;
}

/////London Function
searchLon.addEventListener('click', fetchLon);

function fetchLon(e) {
    e.preventDefault();
    let urlLo = baseUrl + key + 51.5074 + "," + -0.1278;

    fetch(urlLo)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            displayLon(json)


        }, )
}

function displayLon(json) {

    document.getElementById("level").innerHTML = `${Math.floor(json.currently.temperature) + ("°F")}`;
    document.getElementById("weather").innerHTML = `${json.currently.summary}`;
    document.getElementById("city").innerHTML = `${json.timezone}`;
    document.getElementById("pic").innerHTML = `<img src="images/${json.currently.icon}.png" width=100px height =100px />`;
}