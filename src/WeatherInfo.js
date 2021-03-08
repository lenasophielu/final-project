import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo (props){
    return( <div class="Weatherinfo">
      <div class="row row-cols-3">
          <div id="city" class="city">{props.data.city}</div>
          <div class="today">
            <img src={props.data.iconUrl} alt={props.data.description} id="icon" />
          </div>
          <div id="date" class="date"><FormattedDate date={props.data.date} /></div>
          <div class="row"></div>
        </div>
        <div class="row row-cols-9">
          <div id="temperature" class="temperature">{Math.round(props.data.temperature)}</div>
          <div class="unit">°C </div>
        </div>
        <span class="weatherDefinition">{props.data.description}</span>
        <ul class="conditions">
          <li>
           Humidity: {props.data.humidity}: <span id="humidity"></span>%
          </li>
          <li>
           Wind: {props.data.wind} <span id="wind"></span> km/h
          </li>
        </ul>
      </div>

    );
}