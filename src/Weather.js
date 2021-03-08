import React, {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";


export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity:response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date (response.data.dt * 1000)
    });
  }
function search()
{ const apiKey = "643f59cd53a59997e40900d7df9a1d27";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

}


function handleSubmit(event){
  event.preventDefault();
search();}

function handleCityChange(event) {
  setCity(event.target.value);
}


if (weatherData.ready) {
return (
    <div className="App">
      <div class="container">
        <div class="weather-app">
          <form onSubmit={handleSubmit}
          class="search-form" id="search-form">
            <div class="form-row">
              <div class="col-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Where?"
                  id="city-input"
                  onChange={handleCityChange}
              
                />
              </div>
              <div class="col-1.5">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-info"
                  id="searchbutton"
                />
              </div>

              <button
                type="button"
                class="btn btn-secondary"
                id="current-location-button"
              >
                Current
              </button>
            </div>{" "}
          </form>
        </div>
<WeatherInfo data={weatherData} />
       
    </div>
    </div>
  );
 }
  else {
  search();
return "Loading...";
  }
}
