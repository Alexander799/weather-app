//1051f6ef13238541521ff75635f44f34
//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1051f6ef13238541521ff75635f44f34
//
function success(pos) {
    let crd = pos.coords;
    const apiKey = `1051f6ef13238541521ff75635f44f34`;
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}`)
        .then(response => { return response.json() })
        .then(data => { console.log(data) })
        .catch(err => { console.log(err) })

};

navigator.geolocation.getCurrentPosition(success);

/*const cityName = `Kharkiv,ua`,
    apiKey = `1051f6ef13238541521ff75635f44f34`;
fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`)
    .then(response => { return response.json() })
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })*/