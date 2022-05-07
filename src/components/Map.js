import React from "react";

const Map = () => {
  return (
    <div className="map-app">
      <div className="search-container">
        <input className="search" placeholder="Search Location" type="text" />
        <button>Search</button>
      </div>

      <div className="map-content">
        <div className="map-table">table</div>
        <div className="map">map</div>
      </div>
    </div>
  );
};

export default Map;
