import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Copyright from "../components/Copyright";
import axios from "axios";
import {
  Typography,
  FormControl,
  Grid,
  Card,
  CardContent,
  MenuItem,
  Select,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import PinkButton from "../components/PinkButton";
import PopupPage from "../Popup/PopupPage";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2vw 2.5vw",
    backgroundColor: "#DEE3E3",
    width: "95vw",
    padding: "20px",
  },
  root: {
    alignItems: "center",
  },
  formControl: {
    margin: "0 0 20px",
    width: "165px",
  },

  text: {
    color: "#33AB3E",
  },
}));
function Home() {
  const classes = useStyles();
  const [arrival, setArrival] = useState("Airport");
  const [destination, setDestination] = useState("Campus");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [samePlace, setSamePlace] = useState(false);
  const [pastDate, setPastDate] = useState();
  const [isFormSubmitted, setIsFormSubmitted] = useState(undefined);
  const [carStrength, setCarStrength] = useState(1);
  const { userID, setUserInfo, userInfo, setNotes } = useContext(AuthContext);

  const [popupIsShown, setPopupIsShown] = useState(true);

  const showPopupHandler = () => {
    setPopupIsShown(true);
  };
  const hidePopupHandler = () => {
    setPopupIsShown(false);
  };
  const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) =>
    firstDate.getTime() - secondDate.getTime() <= -1000 * 60 * 5;

  const handleDateChange = (date) => {
    setSelectedDate(date);

    // console.log(dateAndTime);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/posts");
      setNotes(response.data);
    };
    fetchData();
  }, [setNotes]);
  useEffect(() => {
    const currentDate = new Date();
    const goodDate = new Date(selectedDate);
    setPastDate(firstDateIsPastDayComparedToSecond(goodDate, currentDate));
  }, [selectedDate]);

  useEffect(() => {
    async function getEmail() {
      const loggedInRes = await axios.get("/api/userInfo/" + userID);
      const data = loggedInRes.data;
      setUserInfo({
        name: data.name,
        email: data.email,
      });
    }
    getEmail();
  }, [userID, setUserInfo]);

  const handleArrivalChange = (event) => {
    setArrival(event.target.value);
  };
  const handleCarChange = (event) => {
    setCarStrength(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = async (event) => {
    //Checks
    event.preventDefault();
    if (arrival === destination) {
      setSamePlace(true);
      setIsFormSubmitted(undefined);
      return;
    } else {
      setSamePlace(false);
    }
    if (pastDate) {
      setIsFormSubmitted(undefined);
      return;
    }

    const goodDate = new Date(selectedDate);

    const dateAndTime = {
      date: goodDate.getDate(),
      month: goodDate.getMonth() + 1,
      year: goodDate.getFullYear(),
      hour: goodDate.getHours(),
      min: goodDate.getMinutes(),
      data: selectedDate,
    };
    const newPost = {
      id: userID,
      name: userInfo.name,
      email: userInfo.email,
      dateAndTime: dateAndTime,
      arrival: arrival,
      destination: destination,
      carStrength: carStrength,
    };

    const response = await axios.post("/api/post/submit", newPost);
    const isSubmitted = response.data.value;
    setIsFormSubmitted(isSubmitted);
  };

  return (
    <>
      {popupIsShown && (
        <PopupPage
          onHidePopup={hidePopupHandler}
          onShowPopup={showPopupHandler}
        />
      )}
      <div className={classes.root}>
        <Typography variant="h4" style={{ margin: "1vw 2.5vw  " }}>
          Hello {userInfo.name},
        </Typography>
        <Card variant="outlined" className={classes.card}>
          <Typography variant="h4">Create Request:</Typography>
          <form className={classes.form} noValidate>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={6}>
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
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
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
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                  </FormControl>
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={6}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Arrival Date"
                      format="dd/MM/yyyy"
                      className={classes.formControl}
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      className={classes.formControl}
                      label="Arrival Time"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl required className={classes.formControl}>
                      <InputLabel id="demo-simple-select-required-label">
                        Car Strength
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={carStrength}
                        onChange={handleCarChange}
                        className={classes.selectEmpty}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                      <FormHelperText>Required</FormHelperText>
                    </FormControl>
                  </Grid>
                </MuiPickersUtilsProvider>
                <PinkButton handleSubmit={handleSubmit}>Submit</PinkButton>
              </Grid>
              {samePlace === true && (
                <Typography variant="h6" color="error">
                  Please Choose Different Places!
                </Typography>
              )}
              {pastDate === true && (
                <Typography variant="h6" color="error">
                  Please Enter a Valid Date!
                </Typography>
              )}
              {isFormSubmitted === true && (
                <Typography variant="h6" className={classes.text}>
                  Form successfully Submitted!
                </Typography>
              )}
              {isFormSubmitted === false && (
                <Typography variant="h6" color="error">
                  Form was not submitted. Please check for duplication.
                </Typography>
              )}
            </CardContent>
          </form>
        </Card>
        <Typography variant="h4" style={{ margin: "1vw 2.5vw 0" }}>
          To see your Posts click{" "}
          <Link to="./yourposts" style={{ color: "#FF1268" }}>
            here
          </Link>
        </Typography>

        <Copyright />
      </div>
    </>
  );
}

export default Home;
