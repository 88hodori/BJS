const API_KEY = "34918faf055a842cfa832ecae13597ab";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child"); 
        const city = document.querySelector("#weather span:last-child");
        city.innerText = "@"+data.name;
        weather.innerText = `${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("can't find you. No weather for you.");    
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);