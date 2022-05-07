import React, { useState, useEffect } from "react";
import "../components/Map.css";

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation(position.coords);
    });
  }, []);
  console.log(currentLocation);

  const getCurrentLocation = () => {
    fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=VVW6BIP6JLN5&format=json&by=position&lat=${currentLocation.latitude}&lng=${currentLocation.longitude}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };
  console.log(details);
  return (
    <div className="map-app">
      <div className="map-header">
        <div className="user-location">
          <button onClick={getCurrentLocation}>My Location</button>
          <div className="detail">
            {details && (
              <ul className="list-group">
                <li>location : {details.cityName} </li>
                <li>IP : {details.countryName}</li>
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
