import React from "react";
import { Card, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RequestText from "./RequestText";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#E0E0E0",
    width: "95vw",
    padding: "20px",
  },
  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },
  gridItem: {
    marginBottom: "25px",
  },
}));

export default function YourCustomCard(props) {
  const classes = useStyles();
  let dateData = props.post.PdateAndTime;
  const handleClick = async () => {
    await axios.get("/api/deletepost/" + props.post._id);
  };
  return (
    <Card variant="outlined" className={classes.card}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={5} className={classes.gridItem}>
          <Box fontSize="h4.fontSize" color="fontWeightBold" display="inline">
            {props.post.Parrival}
          </Box>
        </Grid>
        <Grid item xs={2} className={classes.gridItem}>
          <Box
            className={classes.arrow}
            display="inline"
            fontSize="h4.fontSize"
          >
            <i class="fas fa-arrow-right"></i>
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          style={{ textAlign: "right" }}
          className={classes.gridItem}
        >
          <Box
            fontSize="h4.fontSize"
            color="fontWeightBold"
            display="inline"
            textAlign="right"
          >
            {props.post.Pdestination}
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <Box fontSize="h5.fontSize" color="fontWeightBold" display="inline">
            {`Date: `}
            {dateData.date}/{dateData.month}/{dateData.year}
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ textAlign: "right" }}
          className={classes.gridItem}
        >
          <Box
            fontSize="h5.fontSize"
            color="fontWeightBold"
            display="inline"
            textAlign="right"
          >
            {` Time: `}
            {dateData.hour < 12 ? dateData.hour : dateData.hour - 12}:
            {dateData.min >= 10 ? dateData.min : "0" + dateData.min}
            {dateData.hour < 12 ? " am" : " pm"}
          </Box>
        </Grid>
        {props.post.Preq.map((req) => {
          return (
            <Grid item xs={12}>
              <RequestText req={req}></RequestText>
            </Grid>
          );
        })}
        <Button
          style={{
            backgroundColor: "#424242",
            color: "#e0e0e0",
            marginTop: "20px",
          }}
          onClick={handleClick}
        >
          <i class="fas fa-trash-alt"></i>
        </Button>
      </Grid>
    </Card>
  );
}
