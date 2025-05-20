// src/components/common/Map/GoogleMap.jsx
import React, { useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap, Marker, InfoWindow, OverlayView } from "@react-google-maps/api";
import  {customStyle} from "./CustomStyle.js";
import "../../../assets/stylesheets/GoogleMap.css";

export default function GoogleMapComponent(
  { markers = [],  mapContainerStyle = {},  className = "" }) {
  
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });
  
  const [map, setMap] = useState(null);

  const [infoOpen, setInfoOpen] = useState({});

  const defaultStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "8px"
  };

  useEffect(() => {
    if (map && markers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(m => bounds.extend(m.position));
      map.fitBounds(bounds);
      // 필요에 따라 최대/최소 zoom 을 설정할 수도 있어요:
      // map.setZoom(Math.min(map.getZoom(), 14));
    }
  }, [map, markers]);

  if (loadError) return <div>Map failed to load</div>;
  if (!isLoaded) return <div>Loading…</div>;
  return (
    <GoogleMap
      mapContainerStyle={{ ...defaultStyle, ...mapContainerStyle }}
      className={className}
      center={markers[0]?.position || { lat: 0, lng: 0 }}
      onLoad={mapInstance => setMap(mapInstance)}
      options={{
        disableDefaultUI: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
        styles: customStyle

      }}
    >
    {markers.map(({ id, position, label }) => (
    <OverlayView
      key={id}
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(w, h) => ({ x: -w/2, y: -h - 10 })}
    >
      <div className="map-label">{label}</div>
    </OverlayView>
  ))}
	    {map && (
        <div className="zoom-controls">
          <button
            className="zoom-button"
            onClick={() => map.setZoom(map.getZoom() + 1)}
          >
            +
          </button>
          <button
            className="zoom-button"
            onClick={() => map.setZoom(map.getZoom() - 1)}
          >
            −
          </button>
        </div>
      )}
    </GoogleMap>
  );
}



