import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Kerala");
  const [searchResult, setSearchResult] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=31422048ddfa4e4dc694e7402174f9a3`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.cod === 200) {
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;

        const result = {
          temp,
          weathermood,
          humidity,
          pressure,
          name,
          speed,
          country,
          sunset,
        };
        setSearchResult(result);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          className="search-term"
          autoFocus
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-btn" type="button" onClick={getWeatherInfo}>
          Search
        </button>
      </div>

      <div className="content">
        <WeatherCard searchResult={searchResult} />
      </div>
    </div>
  );
};

export default Weather;
