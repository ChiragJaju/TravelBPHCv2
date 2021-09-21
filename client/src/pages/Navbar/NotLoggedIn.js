import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NavbarButton from "../../components/NavbarButton";

const useStyles = makeStyles((theme) => ({
  logOut: {
    textAlign: "right",
  },
}));

const LoggedIn = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={11} md={6} className={classes.logOut}>
        <NavbarButton>
          <Link
            to="./login"
            style={{ textDecoration: "none", color: "#424242" }}
          >
            Login
          </Link>
        </NavbarButton>

        <NavbarButton>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#424242" }}
          >
            Signup
          </Link>
        </NavbarButton>
      </Grid>
    </>
  );
};

export default LoggedIn;
