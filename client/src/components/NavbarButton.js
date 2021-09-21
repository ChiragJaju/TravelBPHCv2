import React from "react";
import Button from "@material-ui/core/Button";

const NavbarButton = (props) => {
  return (
    <Button color="#ffffff" variant="contained" style={{ marginRight: "1vw" }}>
      {props.children}
    </Button>
  );
};
export default NavbarButton;
