import React, { useContext, useState, useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
// import AuthContext from "../context/AuthContext";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  text: {
    color: "#33AB3E",
  },
  textFalse: {
    color: "#FF0000",
  },
}));

export default function RequestText(props) {
  const classes = useStyles();
  const [responseAccept, setResponseAccept] = useState(undefined);
  const [responseReject, setResponseReject] = useState(undefined);

  // const [currentResponse, setCurrentResponse] = useState(undefined);
  // const { userID, notes, setNotes } = useContext(AuthContext);
  const currentReq = props.postDetails.Preq.filter((req) => {
    if (req.email === props.req.email) return true;
    else return false;
  });
  // console.log(currentReq[0].status);
  const handleClickAccept = async () => {
    if (props.req.carStrength + props.postDetails.PcarStrength <= 4) {
      const isResponseAccept = await axios.post(
        "/api/postRequest/true/" +
          props.req.email +
          "/" +
          props.req.carStrength,
        props.postDetails
      );
      setResponseAccept(isResponseAccept.data);
    }
    // console.log(props.postDetails);
  };
  const handleClickReject = async () => {
    const isResponseReject = await axios.post(
      "/api/postRequest/false/" + props.req.email + "/" + props.req.carStrength,
      props.postDetails
    );
    setResponseReject(isResponseReject.data);
    // console.log(props.postDetails);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("/api/posts");
  //     setNotes(response.data);
  //   };
  //   fetchData();
  // }, [setNotes, responseAccept, responseReject]);
  // console.log(props.req);
  return (
    <>
      <Box
        fontSize="h6.fontSize"
        color="fontWeightBold"
        style={{ margin: "0px 0px 20px 0px" }}
      >
        From: {props.req.name} &nbsp;||&nbsp; Email: {props.req.email}|| Number
        of People they have: {props.req.carStrength}
        {props.current && currentReq[0].status === "true" && (
          <Typography variant="h6" className={classes.text}>
            {"Request Accepted"}
          </Typography>
        )}
        {props.current && currentReq[0].status === "false" && (
          <Typography variant="h6" className={classes.textFalse}>
            {"Request Rejected"}
          </Typography>
        )}
        {props.current &&
          currentReq[0].status === undefined &&
          responseAccept === undefined &&
          responseReject === undefined && (
            <>
              <Button
                style={{
                  backgroundColor: "#1AD61A",
                  color: "#e0e0e0",
                  margin: "0px 0px 0px 20px",
                }}
                onClick={handleClickAccept}
              >
                <i class="fas fa-check"></i>
              </Button>

              <Button
                style={{
                  backgroundColor: "#FF0000",
                  color: "#e0e0e0",
                  margin: "0px 0px 0px 20px",
                }}
                onClick={handleClickReject}
              >
                <i class="fas fa-times"></i>
              </Button>
            </>
          )}
        {/* {props.current && responseAccept && (
          <Typography variant="h6" className={classes.text}>
            {"Request Accepted"}
          </Typography>
        )}
        {props.current && responseReject && (
          <Typography variant="h6" className={classes.textFalse}>
            {"Request Rejected"}
          </Typography>
        )} */}
      </Box>
    </>
  );
}
