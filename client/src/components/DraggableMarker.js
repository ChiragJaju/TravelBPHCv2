import { useState, useRef, useMemo, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});
function DraggableMarker(props) {
  const center = {
    lat: props.coordinates.lat,
    lng: props.coordinates.lng,
  };

  // const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          props.setCoordinates(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    props.setDraggable((d) => {
      if (d === false) {
        props.fieldSetter("Custom");
      }
      return !d;
    });
  }, []);

  return (
    <Marker
      draggable={props.draggable}
      eventHandlers={eventHandlers}
      position={center}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {props.draggable ? "Marker is draggable" : props.message}
        </span>
      </Popup>
    </Marker>
  );
}

export default DraggableMarker;
