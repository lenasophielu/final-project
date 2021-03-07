import React, {useState} from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";


export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity:response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date (response.data.dt * 1000)
    });
  }


if (weatherData.ready) {
return (
    <div className="App">
      <div class="container">
        <div class="weather-app">
          <form class="search-form" id="search-form">
            <div class="form-row">
              <div class="col-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Where?"
                  id="city-input"
              
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

        <div class="row row-cols-3">
          <div id="city" class="city">{weatherData.city}</div>
          <div class="today">
            <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" />
          </div>
          <div id="date" class="date"><FormattedDate date={weatherData.date} /></div>
          <div class="row"></div>
        </div>
        <div class="row row-cols-9">
          <div id="temperature" class="temperature">{Math.round(weatherData.temperature)}</div>
          <div class="unit">°C </div>
        </div>
        <span class="weatherDefinition">{weatherData.description}</span>
        <ul class="conditions">
          <li>
           Humidity: {weatherData.humidity}: <span id="humidity"></span>%
          </li>
          <li>
           Wind: {weatherData.wind} <span id="wind"></span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
 }
  else {
  const apiKey = "643f59cd53a59997e40900d7df9a1d27";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
return "Loading...";
}
  }

