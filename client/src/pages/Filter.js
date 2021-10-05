import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import {
  Card,
  MenuItem,
  FormControl,
  Grid,
  CardContent,
  Select,
  FormHelperText,
  InputLabel,
  Typography,
  TextField,
  Checkbox,
} from "@material-ui/core";
import "date-fns";
import AuthContext from "../context/AuthContext";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import CustomCard from "../components/CustomCard";
import PinkButton from "../components/PinkButton";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#DEE3E3",
    width: "95vw",
    padding: "20px",
  },
  root: {
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(0),
    width: "200px",
  },
  text: {
    color: "#33AB3E",
  },
  checkbox: {
    margin: "20px 0 20px",
  },
  submitButton: {
    margin: "10px 0 20px",
  },
}));

export default function Filter() {
  const classes = useStyles();
  const { notes, setNotes } = useContext(AuthContext);
  const [arrival, setArrival] = useState("Airport");
  const [destination, setDestination] = useState("Campus");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [postsToShow, setPostsToShow] = useState([]);
  const [pastDate, setPastDate] = useState();
  const [draggable, setDraggable] = useState(false);
  const [name, setName] = useState();
  const [arrivalCheckbox, setArrivalCheckbox] = useState(false);
  const [destinationCheckbox, setDestinationCheckbox] = useState(false);
  const [dateCheckbox, setDateCheckbox] = useState(false);
  const [isAnyChecked, setIsAnyChecked] = useState();
  const [nameCheckbox, setNameCheckbox] = useState(false);
  const [isNameEntered, setIsNameEntered] = useState();
  const [tooMany, setTooMany] = useState();
  const handleNameCheckbox = (e) => {
    setNameCheckbox(e.target.checked);
  };
  const handleDateCheckbox = (e) => {
    setDateCheckbox(e.target.checked);
  };
  const handleArrivalCheckbox = (e) => {
    setArrivalCheckbox(e.target.checked);
  };
  const handleDestinationCheckbox = (e) => {
    setDestinationCheckbox(e.target.checked);
  };
  const [arrivalCoordinates, setArrivalCoordinates] = useState({
    lat: 17.237332384,
    lng: 78.423498306,
  });
  const [destinationCoordinates, setDestinationCoordinates] = useState({
    lat: 17.5449,
    lng: 78.5718,
  });
  const [currentLocation, setCurrentLocation] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude);
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleArrivalChange = (event) => {
    setArrival(event.target.value);
    if (event.target.value === "Current Location") {
      setDraggable(false);
      setArrivalCoordinates(currentLocation);
    } else if (event.target.value === "Airport") {
      setDraggable(false);
      setArrivalCoordinates({
        lat: 17.237332384,
        lng: 78.423498306,
      });
    } else if (event.target.value === "Campus") {
      setDraggable(false);
      setArrivalCoordinates({
        lat: 17.5449,
        lng: 78.5718,
      });
    } else if (event.target.value === "Bustop") {
      setDraggable(false);
      setArrivalCoordinates({
        lat: 17.4478,
        lng: 78.4982,
      });
    } else if (event.target.value === "Custom") {
      setDraggable(true);
    }
  };
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
    if (event.target.value === "Current Location") {
      setDraggable(false);
      setDestinationCoordinates(currentLocation);
    } else if (event.target.value === "Airport") {
      setDraggable(false);
      setDestinationCoordinates({
        lat: 17.237332384,
        lng: 78.423498306,
      });
    } else if (event.target.value === "Campus") {
      setDraggable(false);
      setDestinationCoordinates({
        lat: 17.5449,
        lng: 78.5718,
      });
    } else if (event.target.value === "Bustop") {
      setDraggable(false);
      setDestinationCoordinates({
        lat: 17.4478,
        lng: 78.4982,
      });
    } else if (event.target.value === "Custom") {
      setDraggable(true);
    }
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) =>
    firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) < 0;

  const handleDateSubmit = async () => {
    let sendData = {};
    if (nameCheckbox) {
      if (name === undefined || name.trim() === "") {
        setIsNameEntered(false);
        return;
      }
      setIsNameEntered(true);
      const nameData = { name: name };
      sendData = Object.assign(sendData, nameData);
    }
    if (arrivalCheckbox) {
      const arrivalData = { arrivalCoordinates: arrivalCoordinates };
      sendData = Object.assign(sendData, arrivalData);
    }
    if (destinationCheckbox) {
      const destinationData = {
        destinationCoordinates: destinationCoordinates,
      };
      sendData = Object.assign(sendData, destinationData);
    }
    if (Object.keys(sendData).length > 1) {
      setTooMany(true);
      return;
    } else {
      setTooMany(false);
    }
    if (dateCheckbox) {
      const dateData = { dateData: selectedDate.toString() };
      sendData = Object.assign(sendData, dateData);
    }
    if (
      !nameCheckbox &&
      !dateCheckbox &&
      !arrivalCheckbox &&
      !destinationCheckbox
    ) {
      setIsAnyChecked(false);
      return;
    } else {
      setIsAnyChecked(true);
    }
    // console.log(sendData);
    const apiResponse = await axios.post("/api/filter", sendData);
    // console.log(apiResponse.data);
    setPostsToShow(apiResponse.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/posts");
      setNotes(response.data);
    };
    fetchData();
  }, [setNotes, notes]);
  useEffect(() => {
    const currentDate = new Date();
    const goodDate = new Date(selectedDate);
    setPastDate(firstDateIsPastDayComparedToSecond(goodDate, currentDate));
  }, [selectedDate]);

  return (
    <>
      <div>
        <Card variant="outlined" className={classes.card}>
          <form className={classes.form} noValidate>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={3}>
                  <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">
                      Arrival
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={arrival}
                      onChange={handleArrivalChange}
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={"Campus"}>Campus</MenuItem>
                      <MenuItem value={"Airport"}>Airport</MenuItem>
                      <MenuItem value={"Bustop"}>Bustop</MenuItem>
                      <MenuItem value={"Current Location"}>
                        Current Location
                      </MenuItem>
                      <MenuItem value={"Custom"}>Custom</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">
                      Destination
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={destination}
                      onChange={handleDestinationChange}
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={"Campus"}>Campus</MenuItem>
                      <MenuItem value={"Airport"}>Airport</MenuItem>
                      <MenuItem value={"Bustop"}>Bustop</MenuItem>
                      <MenuItem value={"Current Location"}>
                        Current Location
                      </MenuItem>
                      <MenuItem value={"Custom"}>Custom</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={3}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Arrival Date"
                      format="dd/MM/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={3}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Checkbox
                    checked={arrivalCheckbox}
                    onChange={handleArrivalCheckbox}
                    inputProps={{ "aria-label": "controlled" }}
                    className={classes.checkbox}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Checkbox
                    checked={destinationCheckbox}
                    onChange={handleDestinationCheckbox}
                    inputProps={{ "aria-label": "controlled" }}
                    className={classes.checkbox}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Checkbox
                    checked={dateCheckbox}
                    onChange={handleDateCheckbox}
                    inputProps={{ "aria-label": "controlled" }}
                    className={classes.checkbox}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Checkbox
                    checked={nameCheckbox}
                    onChange={handleNameCheckbox}
                    inputProps={{ "aria-label": "controlled" }}
                    className={classes.checkbox}
                  />
                </Grid>
                <Typography variant="h6">
                  Check respective boxes to include in filtering. (Location
                  under 2km)
                </Typography>
                <Typography variant="h6">
                  Rules: Search using only one of the three parameters at a time
                  (i.e Arrival, Destination, Name).
                </Typography>
                <Grid item xs={12} className={classes.submitButton}>
                  <PinkButton handleSubmit={handleDateSubmit}>
                    Search
                  </PinkButton>
                  {isAnyChecked === false && (
                    <Typography variant="h6" color="error">
                      Please check atleast one checkbox!
                    </Typography>
                  )}
                  {isNameEntered === false && (
                    <Typography variant="h6" color="error">
                      Please Enter a Name or Uncheck the respective Checkbox.
                    </Typography>
                  )}
                  {tooMany === true && (
                    <Typography variant="h6" color="error">
                      Please Select only ONE of the following: Arrival,
                      Destination, Name; And Search Again.
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Map
                    arrivalCoordinates={arrivalCoordinates}
                    setArrivalCoordinates={setArrivalCoordinates}
                    destinationCoordinates={destinationCoordinates}
                    setDestinationCoordinates={setDestinationCoordinates}
                    setArrival={setArrival}
                    setDestination={setDestination}
                    draggable={draggable}
                    setDraggable={setDraggable}
                  />
                </Grid>
              </Grid>

              {pastDate === true && (
                <Typography
                  variant="h6"
                  color="textPrimary"
                  style={{ marginTop: "1vw" }}
                >
                  You are viewing Past Requests!
                </Typography>
              )}
            </CardContent>
          </form>
        </Card>
        <hr />

        {postsToShow.length !== 0 && (
          <Typography variant="h4" style={{ margin: "1vw 4vw 0" }}>
            Results:
          </Typography>
        )}
        {postsToShow.length === 0 && (
          <Typography variant="h4" style={{ margin: "1vw 1vw" }}>
            No posts to Display.
          </Typography>
        )}
        <div style={{ padding: "0 2.5vw 50px" }}>
          {/* responsive */}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {postsToShow.map((post) => {
              return <CustomCard post={post}></CustomCard>;
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}
