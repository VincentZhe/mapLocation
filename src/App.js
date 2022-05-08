import "./App.css";
import React from "react";
import Map from "./components/Map";
import MyLocation from "./components/MyLocation";
import "../src/App.css";
import { useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

function App() {
  const [coords, setCoords] = useState({
    lat: "",
    lng: "",
  });

  const defaultCenter = (lat, long) => {
    setCoords({
      lat: lat,
      lng: long,
    });
  };

  const libraries = ["places"];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "Please use other key",
    libraries,
  });

  const onPlaceSelect = React.useCallback((coordinates) => {
    setCoords(coordinates);
  }, []);

  return (
    <div className="App">
      <div className="map-header">
        <MyLocation onDefaultCenter={defaultCenter} />
      </div>
      {isLoaded ? (
        <Map center={coords} isLoaded={isLoaded} onSelect={onPlaceSelect} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default App;
