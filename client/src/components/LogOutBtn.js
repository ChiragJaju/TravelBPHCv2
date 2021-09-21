import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";
import AuthContext from "../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const logOut = async (event) => {
    event.preventDefault();
    await axios.get("/api/logout");
    await getLoggedIn();
    history.push("/login");
  };

  return (
    <Button color="#ffffff" variant="contained" onClick={logOut}>
      Log Out
    </Button>
  );
}

export default LogOutBtn;
