import React from "react";
import "./smallMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map(props) {
  const ACoor = props.ArrivalLocation.coordinates;
  const DCoor = props.DestinationLocation.coordinates;
  const center = {
    lat: (ACoor[1] + DCoor[1]) / 2,
    lng: (ACoor[0] + DCoor[0]) / 2,
  };

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={10}
      scrollWheelZoom={true}
      className="markercluster-map2"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ACoor[1], ACoor[0]]}>
        <Popup>Arrival</Popup>
      </Marker>
      <Marker position={[DCoor[1], DCoor[0]]}>
        <Popup>Destination</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
