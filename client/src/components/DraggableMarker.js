import { useState, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function DraggableMarker() {
  const [position, setPosition] = useState();
  const markerRef = useRef(null);
  const center = {
    lat: 51.505,
    lng: -0.09,
  };
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    ></Marker>
  );
}

export default DraggableMarker;
