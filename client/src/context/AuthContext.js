import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [userID, setUserID] = useState("");
  const [routeMap, setRouteMap] = useState({ id: "asd" });
  const [notes, setNotes] = useState([
    {
      Pid: "",
      Pemail: "",
      Pname: "",
      Parrival: "",
      Pdestination: "",
      PdateAndTime: {
        date: "",
        month: "",
        year: "",
        hour: "",
        min: "",
      },
      Preq: [
        {
          name: "",
          email: "",
          status: "",
        },
      ],
    },
  ]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  async function getLoggedIn() {
    const loggedInRes = await axios.get("/api/loggedIn");
    if (loggedInRes.data.base64) {
      var data = JSON.parse(atob(loggedInRes.data.base64));
      var currentUserID = data.user;
      setUserID(currentUserID);
      // console.log(currentUserID);
    }
    setLoggedIn(loggedInRes.data.value);
  }
  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        getLoggedIn,
        userID,
        setUserID,
        userInfo,
        setUserInfo,
        notes,
        setNotes,
        routeMap,
        setRouteMap,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
