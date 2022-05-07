import "./App.css";
import Map from "./components/Map";
import MyLocation from "./components/MyLocation";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <div className="map-header">
        <MyLocation />
      </div>
      <Map />
    </div>
  );
}

export default App;
