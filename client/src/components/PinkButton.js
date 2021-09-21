import React from "react";
import Button from "@material-ui/core/Button";

export default function PinkButton(props) {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: "#FF1268", color: "#FFFFFF" }}
      onClick={props.handleSubmit}
    >
      {props.children}
    </Button>
  );
}
