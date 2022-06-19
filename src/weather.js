const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d58498ea749038aa7d26db1821a9d4d8`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("Can't! . No Weather");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
