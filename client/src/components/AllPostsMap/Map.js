import React from "react";
import "./smallMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map(props) {
  const center = {
    lat:
      (parseFloat(props.ArrivalLocation.lat) +
        parseFloat(props.DestinationLocation.lat)) /
      2,
    lng:
      (parseFloat(props.ArrivalLocation.lng) +
        parseFloat(props.DestinationLocation.lng)) /
      2,
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
      <Marker
        position={[
          parseFloat(props.ArrivalLocation.lat),
          parseFloat(props.ArrivalLocation.lng),
        ]}
      >
        <Popup>Arrival</Popup>
      </Marker>
      <Marker
        position={[
          parseFloat(props.DestinationLocation.lat),
          parseFloat(props.DestinationLocation.lng),
        ]}
      >
        <Popup>Destination</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
