const express = require("express");
const router = express.Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const posts = require("../models/Posts");
dotenv.config();

router.route("/signup").post(async (req, res) => {
  try {
    const name = req.body.name.trim();
    const email = req.body.email.trim();
    const password = req.body.password;
    const existingUser = await user.findOne({ email: email });

    if (existingUser) {
      return res.json({
        errorMessage: "An account with this email already exists. Please Login",
        value: false,
      });
    }

    //Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //save
    const newUser = new user({
      name,
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    //sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );
    //send the token in a cookie
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send()
      .json({ value: true });
  } catch (err) {
    console.error(err);
    res.json({ value: false });
  }
});

//Save Post
router.route("/post/submit").post(async (req, res) => {
  try {
    const name = req.body.name;
    const id = req.body.id;
    const email = req.body.email;
    const dateAndTime = req.body.dateAndTime;
    const arrival = req.body.arrival;
    const destination = req.body.destination;
    const carStrength = req.body.carStrength;
    const arrivalLocation = req.body.arrivalLocation;
    const destinationLocation = req.body.destinationLocation;

    const existingPost = await posts.findOne({
      Pid: id,
      Pdestination: destination,
      Parrival: arrival,
      PdateAndTime: dateAndTime,
      ArrivalLocation: {
        type: "Point",
        coordinates: [arrivalLocation.lng, arrivalLocation.lat],
      },
      DestinationLocation: {
        type: "Point",
        coordinates: [destinationLocation.lng, destinationLocation.lat],
      },
    });
    if (existingPost) {
      return res.json({
        errorMessage:
          "A Post with same details already exists. Please post only Once!",
        value: false,
      });
    }
    const newPost = new posts({
      Pid: id,
      Pdestination: destination,
      Parrival: arrival,
      PdateAndTime: dateAndTime,
      Pname: name,
      Pemail: email,
      PcarStrength: carStrength,
      ArrivalLocation: {
        type: "Point",
        coordinates: [arrivalLocation.lng, arrivalLocation.lat],
      },
      DestinationLocation: {
        type: "Point",
        coordinates: [destinationLocation.lng, destinationLocation.lat],
      },
    });
    const savedUser = await newPost.save();
    console.log(savedUser);
    res.send({ value: true });
  } catch (err) {
    console.error(err);
    res.send({ value: false });
  }
});

//log in

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await user.findOne({ email: email });
    if (!existingUser) {
      return res.json({
        errorMessage: "Wrong Email or password",
        value: false,
      });
    }
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.json({
        errorMessage: "Wrong Email or password",
        value: false,
      });
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );
    //send the token in a cookie
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send({ value: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ value: false });
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.route("/posts").get((req, res) => {
  posts.find().then((foundNotes) => res.json(foundNotes));
});

module.exports = router;

//To see if we have a token or not
router.get("/loggedIn", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.json({ value: false });
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    // var dataaa = await atob(base64);
    // console.log(data);
    //decoded payload here
    jwt.verify(token, process.env.JWT_SECRET);
    // console.log(verified);
    res.send({ value: true, base64: base64 });
  } catch (err) {
    res.json({ value: false });
  }
});

router.get("/userInfo/:ID", async (req, res) => {
  try {
    const existingUser = await user.findById(req.params.ID);
    res.send(existingUser);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
router.get("/deletepost/:ID", async (req, res) => {
  try {
    const id = req.params.ID;
    await posts.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send(false);
  }
});
router.post("/posts/request/:ID", async (req, res) => {
  try {
    const name = req.body.Rname;
    const email = req.body.Remail;
    const carStrength = req.body.RcarStrength;
    const existingPost = await posts.findById(req.params.ID);
    const preq = existingPost.Preq;
    const PcarStrengthv2 = existingPost.PcarStrength;
    const index = preq.filter((post) => {
      if (post.name === name && post.email === email) return true;
      else return false;
    });

    if (index[0] !== undefined) {
      res.send(false);
    } else {
      const updatedPost = await posts.findByIdAndUpdate(req.params.ID, {
        Preq: [
          {
            name: name,
            email: email,
            status: undefined,
            carStrength: carStrength,
          },
          ...preq,
        ],
      });
      if (updatedPost) res.send(true);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(false);
  }
});

router.post("/postRequest/:response/:email/:carStrength", async (req, res) => {
  try {
    // console.log(req.body.Preq);
    // console.log(req.params.email);
    // console.log(req.body.Preq);
    const oldCarStrength = req.body.PcarStrength;
    let newCarStrength = req.params.carStrength;
    if (req.params.response === "false") {
      newCarStrength = 0;
    }
    await req.body.Preq.map((request) => {
      if (request.email === req.params.email) {
        request.status = req.params.response;
        // console.log(request.status);
      }
    });
    // console.log(req.body.Preq);
    const updatedReq = await posts.findByIdAndUpdate(req.body._id, {
      Preq: req.body.Preq,
      PcarStrength: parseInt(oldCarStrength) + parseInt(newCarStrength),
    });
    const response = req.params.response;
    // console.log(response);
    const existingUser = await user.findOne({ email: req.params.email });
    // console.log(existingUser);
    // console.log(existingUser._id.toString());
    const oldRequestsMade = existingUser.requestsMade;
    const oldPostToShow = existingUser.postToShow;

    const updatedPost = await user.findByIdAndUpdate(
      existingUser._id.toString(),
      {
        requestsMade: [
          { postId: req.body._id, requestStatus: response },
          ...oldRequestsMade,
        ],
        postToShow: [
          { postId: req.body._id, requestStatus: response },
          ...oldPostToShow,
        ],
      }
    );
    if (updatedPost) res.send(true);
  } catch (err) {
    console.error(err);
    res.status(500).send(false);
  }
});

router.post("/filter", async (req, res) => {
  try {
    const d = req.body;
    const dateData = new Date(d.dateData);
    let queryData = {};
    if (d.arrivalCoordinates !== undefined) {
      queryData = Object.assign(queryData, {
        ArrivalLocation: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [d.arrivalCoordinates.lng, d.arrivalCoordinates.lat],
            },
            $maxDistance: 2000, //In metres
          },
        },
      });
    }
    if (d.destinationCoordinates !== undefined) {
      queryData = Object.assign(queryData, {
        DestinationLocation: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: [
                d.destinationCoordinates.lng,
                d.destinationCoordinates.lat,
              ],
            },
            $maxDistance: 2000, //In metres
          },
        },
      });
    }

    if (d.dateData !== undefined) {
      const date = dateData.getDate();
      const month = dateData.getMonth() + 1;
      const year = dateData.getFullYear();
      const query = {
        "PdateAndTime.date": date,
        "PdateAndTime.month": month,
        "PdateAndTime.year": year,
      };
      queryData = Object.assign(queryData, query);
    }
    if (d.name !== undefined) {
      queryData = Object.assign(queryData, {
        $text: { $search: d.name },
      });
    }

    const response = await posts.find(queryData);
    res.send(response);
    // console.log(response);
    // console.log(queryData);
    // res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send(false);
  }
});
