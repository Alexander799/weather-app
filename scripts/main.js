/*let btn = document.getElementById('btn');

let cityName;
btn.onclick = () => {
    return cityName = document.getElementById('city-input');
};
console.log(cityName.value);*/
//https://openweathermap.org/img/wn/.png
let cityName = `Kramatorsk`;
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1051f6ef13238541521ff75635f44f34`)
    .then(response => { return response.json() })
    .then(data => {
        document.getElementById('city').textContent = data.name;
        document.getElementById('degrees').innerHTML += `: ${(data.main.temp - 273).toFixed(2)}&#176`;
        document.getElementById('weather-icon').setAttribute(`src`, `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('direction').innerHTML = `${data.wind.deg}&#176`;
        document.getElementById('speed').textContent = `${data.wind.speed} m/s`;
    })
    .catch(err => { console.log(err) })