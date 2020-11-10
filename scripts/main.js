let cityName;
document.getElementsByClassName('weather-block')[0].style.display = 'none';
document.getElementById('btn').onclick = () => {
    document.getElementById('city').textContent = document.getElementById('user-input');
    if (document.getElementById('city').innerHTML == 'city') {
        document.getElementsByClassName('weather-block')[0].style.display = 'none';
    } else {
        cityName = document.getElementById('user-input');
        document.getElementsByClassName('weather-block')[0].style.display = 'flex';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=1051f6ef13238541521ff75635f44f34`)
            .then(response => { return response.json() })
            .then(data => {
                document.getElementById('city').textContent = data.name;
                document.getElementById('degrees').innerHTML = `Temperature, C: ${(data.main.temp - 273).toFixed(2)}&#176`;
                document.getElementById('weather-icon').setAttribute(`src`, `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('direction').innerHTML = `${data.wind.deg}&#176`;
                document.getElementById('speed').textContent = `${data.wind.speed} m/s`;
            })
            .catch(err => { console.log(err) })
        document.getElementById('user-input').value = "";
    }
}