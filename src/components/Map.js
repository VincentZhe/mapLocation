import React, { useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

import AutoComplete from "./AutoComplete";
import LocationTable from "./LocationTable";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
};

const Map = ({ center, isLoaded, onSelect }) => {
  console.log(center);

  const [record, setRecord] = useState({
    lat: center.lat,
    lng: center.lng,
    name: "Your Location",
  });

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  console.log(center.lat);

  const sCord = ({ lat, lng }, desc) => {
    setRecord({ lat: lat, lng: lng, name: desc });
  };

  return (
    <div className="map-app">
      <AutoComplete isLoaded={isLoaded} onSelect={onSelect} onCord={sCord} />
      <div className="map-content">
        <div className="map-table">
          <LocationTable record={record} />
        </div>

        <div className="map">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Map;
