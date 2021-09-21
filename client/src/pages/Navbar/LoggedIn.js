import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LogOutButton from "../../components/LogOutBtn";
import NavbarButton from "../../components/NavbarButton";

const useStyles = makeStyles((theme) => ({
  logOut: {
    textAlign: "right",
  },
}));

const NotLoggedIn = () => {
  const classes = useStyles();
  return (
    <>
      <Grid xs={11} md={6} className={classes.logOut}>
        <NavbarButton>
          <Link
            to="/filter"
            style={{ textDecoration: "none", color: "#424242" }}
          >
            Filter
          </Link>
        </NavbarButton>
        <NavbarButton>
          <Link
            to="/posts"
            style={{ textDecoration: "none", color: "#424242" }}
          >
            All Posts
          </Link>
        </NavbarButton>
        <LogOutButton />
      </Grid>
    </>
  );
};

export default NotLoggedIn;
