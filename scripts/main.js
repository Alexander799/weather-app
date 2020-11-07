/*let btn = document.getElementById('btn');

let cityName;
btn.onclick = () => {
    return cityName = document.getElementById('city-input');
};
console.log(cityName.value);*/
let cityName = `Kyiv`;
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1051f6ef13238541521ff75635f44f34`)
    .then(response => { return response.json() })
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })