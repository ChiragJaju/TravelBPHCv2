import React, { useState, useContext } from "react";
import Copyright from "../components/Copyright";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import AuthContext from "../context/AuthContext";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  div: {
    height: "100vh",
  },
  googleLogin: {
    margin: theme.spacing(3, 0, 2),
    color: "#F0f0f0",
  },
}));

export default function Login() {
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [correctInput, setCorrectInput] = useState(undefined);
  const classes = useStyles();
  const { getLoggedIn } = useContext(AuthContext);
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = {
        email: emailInput,
        password: passwordInput,
      };

      const response = await axios.post("/api/login", loginData);
      const isWrong = response.data.value;

      setCorrectInput(isWrong);
      if (isWrong) {
        setEmailInput("");
        setPasswordInput("");
      }

      getLoggedIn();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.div}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              value={passwordInput}
              onChange={handlePasswordChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            {correctInput === false && (
              <Typography style={{ color: "#ff0000" }}>
                Invalid Email or Password!
              </Typography>
            )}
          </form>
          <Typography component="h1" variant="h5">
            OR
          </Typography>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.googleLogin}
          > */}
          {/* <Link
            href="localhost:3000/auth/google"
            style={{ textDecoration: "none", color: "#f0f0f0" }}
          > */}

          <a href="http://localhost:5000/auth/google">
            {"Login with "} &nbsp;<i with i class="fab fa-google"></i>
          </a>
          {/* </Link> */}
          {/* </Button> */}
        </div>
      </Container>
      <Copyright />
    </div>
  );
}
