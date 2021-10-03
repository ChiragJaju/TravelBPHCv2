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
  // Map routing try
  // var map = L.map("map");

  function initializingMap() {
    // call this method before you initialize your map.
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }
  }
  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution: "© OpenStreetMap contributors",
  // }).addTo(map);
  useEffect(() => {
    initializingMap();
    let current_lat = 28.625789;
    let current_long = 77.0547899;
    let current_zoom = 16;
    let center_lat = current_lat;
    let center_long = current_long;
    let center_zoom = current_zoom;

    // The <div id="map"> must be added to the dom before calling L.map('map')
    let map = L.map("map", {
      center: [center_lat, center_long],
      zoom: center_zoom,
    });
    // map.off();
    // map.remove();
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.Routing.control({
      router: L.Routing.mapbox(
        "pk.eyJ1IjoiY2hpcmFnamFqdSIsImEiOiJja3ViNG51bXIwa3Y0MnZudnI0cnRjaXN2In0.9vMp1GnxRyx6YhbCn2anAA"
      ),
      waypoints: [
        L.latLng(current_lat, current_long),
        L.latLng(28.625, 77.05479),
      ],
      routeWhileDragging: true,
    }).addTo(map);
  }, []);
  //  /map routing try

  return (
    <div class="right-sidebar-container">{true && <div id="map"></div>}</div>
    // <MapContainer
    //   center={[17.42522759541259, 78.48498670510129]}
    //   zoom={10}
    //   scrollWheelZoom={true}
    //   className="markercluster-map"
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   {/* <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker> */}
    //   <DraggableMarker //For arrival
    //     coordinates={props.arrivalCoordinates}
    //     setCoordinates={props.setArrivalCoordinates}
    //     message={"Click to make it draggable and choose Arrival"}
    //     fieldSetter={props.setArrival}
    //     draggable={props.draggable}
    //     setDraggable={props.setDraggable}
    //   />
    //   <DraggableMarker //For Destination
    //     coordinates={props.destinationCoordinates}
    //     setCoordinates={props.setDestinationCoordinates}
    //     message={"Click to make it draggable and choose Destination"}
    //     fieldSetter={props.setDestination}
    //     draggable={props.draggable}
    //     setDraggable={props.setDraggable}
    //   />
    // </MapContainer>
  );
}

export default Map;
