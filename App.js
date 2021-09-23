const express = require("express");
const session = require("express-session");
const app = express();
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
const cookieParser = require("cookie-parser");
const path = require("path");

require("./auth");
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

mongoose.connect(process.env.MDB_CONNECT);

app.use("/api", require("./routes/dummyRoutes"));

// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("/*", function (req, res) {
//   const pathToIndex = path.join(__dirname, "client", "build", "index.html");
//   const raw = fs.readFileSync(pathToIndex);
//   console.log(raw);
//   res.send(raw);
// });

app.get("/google", (req, res) => {
  res.send("<a href='/auth/google'>Authenticate with Google</a>");
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);
app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong");
});

app.get("/protected", isLoggedIn, (req, res) => {
  res.send("Hello!");
  console.log(req.user);
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
