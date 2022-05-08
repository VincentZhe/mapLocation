import React, { useState, useEffect } from "react";

const MyLocation = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [details, setDetails] = useState(null);
  const API_KEY = "Please use other key";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation(position.coords);
      props.onDefaultCenter(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }, []);

  const getCurrentLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&exclude=hourly,daily&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };
  console.log(details);
  return (
    <div className="user-location">
      <button onClick={getCurrentLocation}>My Location</button>
      <div className="detail">
        {details && (
          <ul className="list-group">
            <li>City : {details.name} </li>
            <li>Country : {details.sys.country}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyLocation;
