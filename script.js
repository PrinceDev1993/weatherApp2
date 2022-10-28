const api = {
    key: "0722141ec244f0ac1bb489c0284342d2", 
    base: "https://api.openweathermap.org/data/2.5/",

};

const searchBox = document.querySelector("#formInput");
searchBox.addEventListener("keypress", searchFtn);

function searchFtn(e) {
    if (e.keyCode === 13) {
        getResults(searchBox.value);
    }
};

function  getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather  => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);

    //location
    const location = document.querySelector("#location");
    location.textContent = `${weather.name}, ${weather.sys.country}`;

    //Date
    const now = new Date();
    const dataDate = document.querySelector("#date");
    dataDate.innerText = dateFtn(now);

    //degree temperature
    const  tempDegree = document.querySelector(".temp");
    tempDegree.innerHTML = `${weather.main.temp} &#8451`;

    //weather description
    const  weatherStatus = document.querySelector(".status");
    weatherStatus.textContent = `${weather.weather[0].main}`;

    //temperature range
    const tempRange = document.querySelector(".tempRange");
    tempRange.innerHTML = `${weather.main.temp_min} &#8451 / ${weather.main.temp_max} &#8451`;


};


function dateFtn(d) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
};