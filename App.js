const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const passport = require("passport");
app.use(
  session({
    secret: "cats",
  })
);
app.use(passport.initialize());
app.use(passport.session());
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user = require("./models/user");
const cookieParser = require("cookie-parser");
const path = require("path");

require("./auth");
dotenv.config();

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

async function isLoggedIn(req, res, next) {
  if (req.user._json.domain === "hyderabad.bits-pilani.ac.in") {
    const name = req.user.displayName;
    const email = req.user.email;
    // console.log(req.user);
    const currentUser = await user.findOne({ email: email });
    if (currentUser === null) {
      //create one
      const newUser = new user({
        name,
        email,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign(
        {
          user: savedUser._id,
        },
        process.env.JWT_SECRET
      );
      res.cookie("token", token, {
        httpOnly: true,
      });
    } else {
      const token = jwt.sign(
        {
          user: currentUser._id,
        },
        process.env.JWT_SECRET
      );
      //send the token in a cookie
      res.cookie("token", token, {
        httpOnly: true,
      });
    }
    // create jwt token

    next();
  } else res.send("Please login with BITSmail only");
}

mongoose.connect(process.env.MDB_CONNECT);
// mongoose.connect("mongodb://localhost:27017"); //Clusters fail to connect on BITS wifi

app.use("/api", require("./routes/dummyRoutes"));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/google/success",
    failureRedirect: "/auth/failure",
  })
);
app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong");
});

app.get("/auth/google/success", isLoggedIn, (req, res) => {
  res.redirect("/");
});
app.get("/google/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("GoodBye");
});

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});
