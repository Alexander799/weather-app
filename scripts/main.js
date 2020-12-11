let cityName;
document.getElementsByClassName('weather-block')[0].style.display = 'none';
document.getElementById('btn').onclick = () => {
    operation(true);
}

document.addEventListener('keyup', function(event) {
    operation(event.code == 'Enter')
});

function operation(bool) {
    if (bool) {
        const USERINPUT = document.getElementById('user-input');
        if (USERINPUT.value.trim().length > 0) {
            document.getElementById('city').textContent = USERINPUT.value;
            if (document.getElementById('city').innerHTML == 'city') {
                document.getElementsByClassName('weather-block')[0].style.display = 'none';
            } else {
                cityName = USERINPUT.value.trim();
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1051f6ef13238541521ff75635f44f34`)
                    .then(response => { return response.json() })
                    .then(data => {
                        document.getElementById('city').textContent = data.name;
                        document.getElementById('degrees').innerHTML = `Temperature, C: ${(data.main.temp - 273).toFixed(2)}&#176`;
                        document.getElementById('weather-icon').setAttribute(`src`, `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
                        document.getElementById('description').textContent = data.weather[0].description;
                        document.getElementById('direction').innerHTML = direction(data.wind.deg);
                        document.getElementById('speed').textContent = `${data.wind.speed} m/s`;
                    })
                    .catch(err => { console.log(err) })
                USERINPUT.value = "";
                document.getElementsByClassName('weather-block')[0].style.display = 'flex';
            }
        } else {
            USERINPUT.value = "";
        }
    }
}

function direction(deg) {
    if (deg > 337 && deg <= 360 || deg >= 0 && deg <= 22) {
        return 'North';
    } else if (deg >= 22 && deg <= 67) {
        return 'North-East';
    } else if (deg > 67 && deg <= 112) {
        return 'East';
    } else if (deg > 112 && deg <= 157) {
        return 'East-South';
    } else if (deg > 157 && deg <= 202) {
        return 'South';
    } else if (deg > 202 && deg <= 247) {
        return 'South-West';
    } else if (deg > 247 && deg <= 292) {
        return 'West';
    } else if (deg > 292 && deg <= 337) {
        return 'North-West';
    }
}