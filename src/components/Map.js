import React, { useState } from "react";
import "../components/Map.css";

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = () => {
    fetch(
      "https://geolocation-db.com/json/fb79dea0-caa7-11ec-aad1-5d8adccafc58"
    )
      .then((res) => res.json())
      .then((data) => setCurrentLocation(data));
  };
  return (
    <div className="map-app">
      <div className="map-header">
        <div className="user-location">
          <button onClick={getCurrentLocation}>My Location</button>
          <div className="detail">
            {currentLocation && (
              <ul className="list-group">
                <li>
                  location :{" "}
                  {`${currentLocation.city}, ${currentLocation.country_name}`}
                </li>
                <li>IP : {currentLocation.IPv4}</li>
              </ul>
            )}
          </div>
        </div>
        <div className="search-container">
          <input className="search" placeholder="Search Location" type="text" />
          <button>Search</button>
        </div>
      </div>
      <div className="map-content">
        <div className="map-table">table</div>
        <div className="map">map</div>
      </div>
    </div>
  );
};

export default Map;
