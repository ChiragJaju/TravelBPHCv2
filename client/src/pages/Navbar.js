import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Grid,
  Fab,
  Zoom,
} from "@material-ui/core";
import AuthContext from "../context/AuthContext";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import LoggedIn from "./Navbar/LoggedIn";
import NotLoggedIn from "./Navbar/NotLoggedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const { loggedIn } = useContext(AuthContext);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ background: "#424242" }}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={1} md={6}>
              <Button color="#ffffff" variant="contained">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#424242" }}
                >
                  Home
                </Link>
              </Button>
            </Grid>
            {loggedIn ? <LoggedIn /> : <NotLoggedIn />}
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
