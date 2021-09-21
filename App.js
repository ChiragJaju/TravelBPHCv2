const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

mongoose.connect(process.env.MDB_CONNECT);

app.use("/api", require("./routes/dummyRoutes"));

// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("/*", function (req, res) {
//   const pathToIndex = path.join(__dirname, "client", "build", "index.html");
//   const raw = fs.readFileSync(pathToIndex);
//   console.log(raw);
//   res.send(raw);
// });

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});
