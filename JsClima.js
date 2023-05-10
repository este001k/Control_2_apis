
const API_KEY = '43b2c559ea3845e6b1f224323230905';

function getWeather(city) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      //Usamos querySelector para que se vea en el html y este tenga el contenido de la api
      document.querySelector('#city').textContent = city;
      document.querySelector('#temp').textContent = data.current.temp_c;
      document.querySelector('#weather').textContent = data.current.condition.text;
      document.querySelector('#wind').textContent = data.current.wind_kph;
      document.querySelector('#humidity').textContent = data.current.humidity;
    })
    .catch(error => console.log(error));
}
//ahora se creara una variables con las que se podra de interactuar con el usuario
const select = document.querySelector('#Localizacion');
const button = document.querySelector('#botonClima');

//Con esto se creara un evento cuando se haga click con el boton se activara un modo que haga que puedas cambiar
//las localizaciones mediante el Select esto hara que muestre las opciones que se tienen agregadas
button.addEventListener('click', () => {
  const city = select.value;
  if (city) {
    getWeather(city);
  }
});

// Cargar el clima de la primera ciudad por defecto
getWeather(cities[0]);
