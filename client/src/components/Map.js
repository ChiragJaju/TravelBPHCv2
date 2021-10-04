import React, { useEffect, useState } from "react";
import "./map.css";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DraggableMarker from "./DraggableMarker";
require("leaflet-routing-machine");
function Map(props) {
  const center = {
    lat: 17.237332384,
    lng: 78.423498306,
  };
  const [isAdded, setIsAdded] = useState(false);

  return (
    <MapContainer
      center={[17.42522759541259, 78.48498670510129]}
      zoom={10}
      scrollWheelZoom={true}
      className="markercluster-map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <DraggableMarker //For arrival
        coordinates={props.arrivalCoordinates}
        setCoordinates={props.setArrivalCoordinates}
        message={"Click to make it draggable and choose Arrival"}
        fieldSetter={props.setArrival}
        draggable={props.draggable}
        setDraggable={props.setDraggable}
      />
      <DraggableMarker //For Destination
        coordinates={props.destinationCoordinates}
        setCoordinates={props.setDestinationCoordinates}
        message={"Click to make it draggable and choose Destination"}
        fieldSetter={props.setDestination}
        draggable={props.draggable}
        setDraggable={props.setDraggable}
      />
    </MapContainer>
  );
}

export default Map;
