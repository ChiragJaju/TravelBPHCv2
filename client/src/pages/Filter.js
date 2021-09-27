import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  Card,
  MenuItem,
  FormControl,
  Grid,
  CardContent,
  Select,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";
import "date-fns";
import { Typography } from "@material-ui/core";
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
    marginBottom: "50px",
  },
  text: {
    color: "#33AB3E",
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

  const handleArrivalChange = (event) => {
    setArrival(event.target.value);
  };
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) =>
    firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) < 0;

  const handlePlaceSubmit = () => {
    let filteredPosts = notes.filter((post) => {
      if (post.Parrival === arrival && post.Pdestination === destination) {
        const currentDate = new Date();
        const goodDate = new Date(post.PdateAndTime.data);
        if (goodDate.getTime() - currentDate.getTime() >= 0) return true;
        else return false;
      } else return false;
    });

    setPostsToShow(filteredPosts);
  };
  const handleDateSubmit = async () => {
    // const response = await notes.filter((post) => {
    //   const goodDate = new Date(post.PdateAndTime.data);
    //   if (
    //     Math.abs(
    //       goodDate.setHours(0, 0, 0, 0) - selectedDate.setHours(0, 0, 0, 0)
    //     ) <= 0
    //   )
    //     return true;
    //   else return false;
    // });
    const apiResponse = await axios.get(
      "/api/filterDate/" +
        selectedDate.getDate() +
        "/" +
        selectedDate.getMonth() +
        "/" +
        selectedDate.getFullYear()
    );
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
          <Typography variant="h4">Filter</Typography>
          <form className={classes.form} noValidate>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                  <Grid item xs={4}>
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
                <Grid item xs={4}>
                  <PinkButton handleSubmit={handlePlaceSubmit}>
                    By Place
                  </PinkButton>
                </Grid>
                <Grid item xs={4}>
                  <PinkButton handleSubmit={handleDateSubmit}>
                    By Date
                  </PinkButton>
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
