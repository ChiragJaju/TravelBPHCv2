import React, { useState, useContext } from "react";
import axios from "axios";
import Copyright from "../components/Copyright";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../context/AuthContext";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const { getLoggedIn } = useContext(AuthContext);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isEnteredValid, setIsEnteredValid] = useState(undefined);
  const [isEmailValid, setIsEmailValid] = useState(undefined);

  var isFormValid = undefined;
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (
      nameInput.trim().length !== 0 &&
      emailInput.trim().length !== 0 &&
      passwordInput.trim().length !== 0 &&
      emailInput.trim().includes("@")
    ) {
      isFormValid = true;
      setIsEnteredValid(true);
    } else {
      isFormValid = false;
      setIsEnteredValid(false);
    }

    const newUser = {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    };

    if (isFormValid) {
      const { data } = await axios.post("/api/signup", newUser);
      if (data.value) {
        setEmailInput("");
        setNameInput("");
        setPasswordInput("");
      }

      setIsEmailValid(data.value);
      getLoggedIn();
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={handleNameChange}
                  value={nameInput}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  onChange={handleEmailChange}
                  value={emailInput}
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  required
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                  value={passwordInput}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              Sign Up
            </Button>
            {isEnteredValid === false && (
              <Typography style={{ color: "#ff0000" }}>
                Please Enter Valid Information!
              </Typography>
            )}
            {isEmailValid === false && (
              <Typography style={{ color: "#ff0000" }}>
                This Email is already Registered, Please Login.
              </Typography>
            )}
          </form>
        </div>
      </Container>
      <Copyright />
    </div>
  );
}
