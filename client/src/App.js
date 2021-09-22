import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Posts from "./pages/Posts";
import axios from "axios";
import YourPosts from "./pages/YourPosts";
import Navbar from "./pages/Navbar";
import Filter from "./pages/Filter";
import PopupPage from "./Popup/PopupPage";

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />

      <>
        <Route path="/login">
          {loggedIn !== true ? <Login /> : <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/" exact>
          {loggedIn === true ? <Home /> : <Redirect to="/login"></Redirect>}
        </Route>
        <Route path="/signup">
          {loggedIn !== true ? <SignUp /> : <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/posts">
          {loggedIn === true ? <Posts /> : <Redirect to="/login"></Redirect>}
        </Route>
        <Route path="/yourposts">
          {loggedIn === true ? (
            <YourPosts />
          ) : (
            <Redirect to="/login"></Redirect>
          )}
        </Route>
        <Route path="/filter">
          {loggedIn === true ? <Filter /> : <Redirect to="/login"></Redirect>}
        </Route>
      </>
    </Router>
  );
}

export default App;
