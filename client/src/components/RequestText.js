import React from "react";
import Box from "@material-ui/core/Box";

export default function RequestText(props) {
  return (
    <>
      <Box fontSize="h6.fontSize" color="fontWeightBold">
        From: {props.req.name} &nbsp;||&nbsp; Email: {props.req.email}
      </Box>
    </>
  );
}
