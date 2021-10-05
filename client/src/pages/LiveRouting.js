import React, { useEffect, useContext } from "react";

import AuthContext from "../context/AuthContext";
import Copyright from "../components/Copyright";
import Navbar from "./Navbar";
import L from "leaflet";
import "./LiveRouting.css";
import "leaflet/dist/leaflet.css";
require("leaflet-routing-machine");

const RouteMap = (props) => {
  const { routeMap, currentLocation } = useContext(AuthContext);
  let Acoor = routeMap.ArrivalLocation.coordinates;
  const Dcoor = routeMap.DestinationLocation.coordinates;

  function initializingMap(props) {
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }
  }

  useEffect(() => {
    initializingMap();
    // console.log(currentLocation);
    let map = L.map("map", {
      center: [(Acoor[0] + Dcoor[0]) / 2, (Acoor[1] + Dcoor[1]) / 2],
      zoom: 13,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.Routing.control({
      router: L.Routing.mapbox(
        "pk.eyJ1IjoiY2hpcmFnamFqdSIsImEiOiJja3ViNG51bXIwa3Y0MnZudnI0cnRjaXN2In0.9vMp1GnxRyx6YhbCn2anAA"
      ),
      waypoints: [
        L.latLng(currentLocation[0], currentLocation[1]),
        L.latLng(Dcoor[1], Dcoor[0]),
      ],
      //   waypoints: [L.latLng(Acoor[1], Acoor[0]), L.latLng(Dcoor[1], Dcoor[0])],
      routeWhileDragging: true,
    }).addTo(map);

    map
      .locate({
        setView: true,
        watch: true,
      })
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
        // console.log("x");
        setTimeout(() => {
          map.removeLayer(circle);
          map.removeLayer(marker);
        }, 1000);
      })
      .on("locationerror", function (e) {
        console.log(e);
        alert("Location access denied.");
      });
  }, [Acoor, Dcoor, currentLocation]);
  //  /map routing try

  return (
    <>
      <Navbar />
      <div class="right-sidebar-container">
        {true && <div id="map"></div>}
        <Copyright />
      </div>
    </>
  );
};

export default RouteMap;
