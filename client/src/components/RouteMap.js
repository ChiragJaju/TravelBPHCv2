import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../context/AuthContext";
import Copyright from "./Copyright";
import { Redirect } from "react-router-dom";
import Navbar from "../pages/Navbar";
import L from "leaflet";
import "./RouteMap.css";
import "leaflet/dist/leaflet.css";
import PinkButton from "./PinkButton";

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

  function initializingMap(props) {
    // call this method before you initialize your map.
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }
  }

  useEffect(() => {
    initializingMap();
    // The <div id="map"> must be added to the dom before calling L.map('map')
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
      waypoints: [L.latLng(Acoor[1], Acoor[0]), L.latLng(Dcoor[1], Dcoor[0])],
      routeWhileDragging: true,
    }).addTo(map);
  }, [Acoor, Dcoor, startRouting]);
  //  /map routing try
  const handleSubmit = () => {
    setStartRouting(true);
  };

  return (
    <>
      {startRouting && (
        <Redirect
          to={{
            pathname: "/liveroute",
          }}
        />
      )}
      <Navbar />
      <div class="right-sidebar-container">
        {true && <div id="map"></div>}
        <div className={classes.routingButton}>
          <PinkButton handleSubmit={handleSubmit}>Start Routing</PinkButton>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default RouteMap;
