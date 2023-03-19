import React from "react";
import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";


require('dotenv').config()
const API_KEY =process.env.REACT_APP_API_KEY;

const Weather = () => {
  const [searchValue, setSearchValue] = useState("bangalore");
  const [apiInfo, setApiInfo] = useState({});
  const searchCity =() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`;
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        const { temp, humidity, pressure } = data.main;
        const { main: weather } = data.weather[0];
        const { name } = data;
        const { country, sunset } = data.sys;
        const { speed } = data.wind;

        const weatherInfo = {
          temp,
          humidity,
          pressure,
          weather,
          name,
          country,
          sunset,
          speed,
        };
        setApiInfo(weatherInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    searchCity();
  }, []);

  return (
    <>
      <div className="search">
        <input
          type="search"
          name=""
          id=""
          placeholder="search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            searchCity();
          }}
        >
          Search
        </button>
      </div>
      <div className="container">
        <WeatherCard apiInfo={apiInfo} />
      </div>
    </>
  );
};

export default Weather;