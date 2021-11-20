import React, { useState } from "react";
import "./main-page.css";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      //Sends the get request to this api URL, get JSON response
      console.log(process.env);
      fetch(
        `${process.env.REACT_APP_API_BASE}weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const clickSearch = () => {
      //Sends the get request to this api URL, get JSON response
      console.log(process.env);
      fetch(
        `${process.env.REACT_APP_API_BASE}weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
  };

  const buildDate = (d) => {
    console.log(d);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="main-page">
      <main>
        <div className="intro">
          <h2>weather.ak</h2>
          <p>Get current weather data of any city!</p>
        </div>
        <div className="search-div">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <button className="search-btn" onClick={clickSearch}>
            Search
          </button>
        </div>
        {typeof weather.main != "undefined" && (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{buildDate(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MainPage;
