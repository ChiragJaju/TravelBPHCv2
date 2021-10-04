import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../context/AuthContext";
import Copyright from "./Copyright";
import Navbar from "../pages/Navbar";
import L from "leaflet";
import "./RouteMap.css";
import "leaflet/dist/leaflet.css";
import PinkButton from "./PinkButton";
import { mergeClasses } from "@material-ui/styles";
require("leaflet-routing-machine");
const useStyles = makeStyles((theme) => ({
  routingButton: {
    marginLeft: "10%",
    marginTop: "20px",
  },
  routingButtonStop: {},
}));

const RouteMap = (props) => {
  const classes = useStyles();
  const { routeMap } = useContext(AuthContext);
  let Acoor = routeMap.ArrivalLocation.coordinates;
  const Dcoor = routeMap.DestinationLocation.coordinates;
  const [startRouting, setStartRouting] = useState(false);
  // Map routing try
  // var map = L.map("map");

  function initializingMap(props) {
    // call this method before you initialize your map.
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }
  }
  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution: "© OpenStreetMap contributors",
  // }).addTo(map);
  const [currentLocation, setCurrentLocation] = useState();
  useEffect(() => {
    initializingMap();
    // The <div id="map"> must be added to the dom before calling L.map('map')
    let map = L.map("map", {
      center: [(Acoor[0] + Dcoor[0]) / 2, (Acoor[1] + Dcoor[1]) / 2],
      zoom: 13,
    });
    // map.off();
    // map.remove();
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude);
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.Routing.control({
      router: L.Routing.mapbox(
        "pk.eyJ1IjoiY2hpcmFnamFqdSIsImEiOiJja3ViNG51bXIwa3Y0MnZudnI0cnRjaXN2In0.9vMp1GnxRyx6YhbCn2anAA"
      ),
      waypoints: [L.latLng(Acoor[1], Acoor[0]), L.latLng(Dcoor[1], Dcoor[0])],
      routeWhileDragging: true,
    }).addTo(map);

    if (startRouting) {
      map
        .locate({
          setView: true,
          watch: true,
        }) /* This will return map so you can do chaining */
        .on("locationfound", function (e) {
          var marker = L.marker([e.latitude, e.longitude]).bindPopup(
            "Your are here :)"
          );
          var circle = L.circle([e.latitude, e.longitude], e.accuracy / 2, {
            weight: 1,
            color: "blue",
            fillColor: "#cacaca",
            fillOpacity: 0.1,
          });
          map.addLayer(marker);
          map.addLayer(circle);

          L.Routing.control({
            waypoints: [
              L.latLng(e.longitude, e.latitude),
              L.latLng(Dcoor[1], Dcoor[0]),
            ],
          });
        })
        .on("locationerror", function (e) {
          console.log(e);
          alert("Location access denied.");
        });
    }
  }, [Acoor, Dcoor, startRouting]);
  //  /map routing try
  const handleSubmit = () => {
    setStartRouting(true);
    navigator.geolocation.getCurrentPosition((position) => {
      Acoor = [position.coords.longitude, position.coords.latitude];
    });
  };

  const handleSubmitStop = () => {
    setStartRouting(false);
  };
  return (
    <>
      <Navbar />
      <div class="right-sidebar-container">
        {true && <div id="map"></div>}
        <div className={classes.routingButton}>
          <PinkButton handleSubmit={handleSubmit}>Start Routing</PinkButton>
        </div>
        <div className={classes.routingButton}>
          <PinkButton handleSubmit={handleSubmitStop}>Stop Routing</PinkButton>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default RouteMap;
