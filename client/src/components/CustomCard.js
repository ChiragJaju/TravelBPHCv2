import React, { useContext, useState } from "react";
import { Card, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import PinkButton from "./PinkButton";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: "1vw 1.5vw",
    backgroundColor: "#E0E0E0",
    // width: "100%",
    padding: "2vw",
  },

  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },
  gridItem: {
    marginBottom: "25px",
  },
  text: {
    color: "#33AB3E",
  },
  textFalse: {
    color: "#FF0000",
  },
}));
export default function CustomCard(props) {
  const classes = useStyles();
  const [isReqSent, setIsReqSent] = useState(undefined);

  const { userInfo } = useContext(AuthContext);
  let dateData = props.post.PdateAndTime;
  const handleClick = async (event) => {
    // console.log(props.post._id);
    // console.log(isRequested);
    const sendDetails = {
      Rname: userInfo.name,
      Remail: userInfo.email,
    };
    const response = await axios.post(
      "/api/posts/request/" + props.post._id,
      sendDetails
    );
    setIsReqSent(response.data);
    isRequested = [];
  };

  // console.log(props.post.Preq);
  let isRequested = props.post.Preq.filter((request) => {
    if (request.email === userInfo.email) return true;
    else return false;
  });

  return (
    <Grid item xs={12} md={6}>
      <Box display="inline-block">
        <Card variant="outlined" className={classes.card}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={5} className={classes.gridItem}>
              <Box
                fontSize="h4.fontSize"
                color="fontWeightBold"
                display="inline"
              >
                {props.post.Parrival}
              </Box>
              <hr />
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
              <Box
                className={classes.arrow}
                display="inline"
                fontSize="h4.fontSize"
              >
                <i class="fas fa-arrow-right"></i>
              </Box>
              <hr />
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
              <hr />
            </Grid>

            <Grid item xs={6} className={classes.gridItem}>
              <Box
                fontSize="h5.fontSize"
                color="fontWeightBold"
                display="inline"
              >
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
            <Grid item xs={6} className={classes.gridItem}>
              <Box
                fontSize="h5.fontSize"
                color="fontWeightBold"
                display="inline"
              >
                {props.post.Pname}
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
                {props.post.Pemail}
              </Box>
            </Grid>

            {isRequested.length === 0 && (
              <PinkButton handleSubmit={handleClick}>Request</PinkButton>
            )}
            {isRequested.length !== 0 && (
              <Typography variant="h6" className={classes.textFalse}>
                {"Request was already sent."}
              </Typography>
            )}

            {isReqSent === true && (
              <Typography variant="h6" className={classes.text}>
                {"Request Successfully Submitted!"}
              </Typography>
            )}
            {/* {isReqSent === false && (
              <Typography variant="h6" className={classes.textFalse}>
                {"Request was already sent."}
              </Typography>
            )} */}
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
}
