import React from "react";
import { useState, useEffect } from "react";

const WeatherCard = ({ apiInfo }) => {
  const [weatherMood, setWeatherMood] = useState("");
  const { temp, humidity, pressure, weather, name, country, sunset, speed } =
    apiInfo;
  const date = new Date(sunset * 1000);
  const time = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    switch (weather) {
      case "Clouds":
        setWeatherMood("wi-day-cloudy");
        break;
      case "Haze":
        setWeatherMood("wi-fog");
        break;
      case "Clear":
        setWeatherMood("wi-day-sunny");
        break;
      case "Smoke":
        setWeatherMood("wi-snowflake-cold");
        break;

      default:
        setWeatherMood("wi-day-sunny");
        break;
    }
  }, [weather]);

  return (
    <>
      <div className="card">
        <div className="weather-icon">
          <i className={`wi ${weatherMood}`}></i>
        </div>
        <div className="weather-info">
          <div className="temperature">
            <span style={{ padding: "10px 47px" }}>{temp}°</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weather}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
          <div className="date-info">
            <div> {new Date().toLocaleString()}</div>
          </div>
        </div>
        <div className="extra-temp-info">
          <div className="temp-info">
            <p className="icon">
              <i className="wi wi-sunset"></i>
            </p>
            <p>
              {time}
              <br />
              Sunset
            </p>
          </div>
          <div className="temp-info">
            <p className="icon">
              <i className="wi wi-humidity"></i>
            </p>
            <p>
              {humidity}
              <br />
              humidity
            </p>
          </div>
          <div className="temp-info">
            <p className="icon">
              <i className="wi wi-rain"></i>
            </p>
            <p>
              {pressure}
              <br />
              pressure
            </p>
          </div>
          <div className="temp-info">
            <p className="icon">
              <i className="wi wi-strong-wind"></i>
            </p>
            <p>
              {speed}
              <br />
              speed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;

