import React from "react";
// Set up the API key
const api = {
  key: "4bb9caf36d683576d66b5b3f26cf00bc",
  base: "https://api.openweathermap.org/data/2.5/",
};

const mainPage = () => {
  return (
    <div className="main-page">
      <main>
        <div>
          <input
            type="text"
            className="search-bar"
            placeholder="Search city..."
          />
        </div>
        <div className="location-box">
          <div className="location"></div>
        </div>
      </main>
    </div>
  );
};

export default mainPage;
