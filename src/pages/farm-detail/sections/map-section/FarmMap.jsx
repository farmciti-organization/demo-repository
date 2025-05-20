import React, { useState } from "react";
import GoogleMapComponent from "../../../../components/common/map/GoogleMap";
import "../../../../assets/stylesheets/farm-detail/map-section/FarmMap.css";


export default function FarmMapSection() {
  const coords = { lat: 43.9534, lng: -78.8753 };
  const [map, setMap] = useState(null);
  const markers = [
    {
      id: 1,
      position: coords,
      label: "Pingle’s Farm Market",
    },
  ];


  return (
    <section className="map-Section">
      <div className="map-container">
        <div className="map-title-box">
          <h2 className="map-title">
            Where Your Farm Experience Awaits
          </h2>
        </div>

        <div className="map-img">
          <GoogleMapComponent
            markers={markers}
            onLoad={setMap}
            mapContainerStyle={{ height: "500px" }}  
          />

   
        </div>
      </div>
    </section>
);
}
