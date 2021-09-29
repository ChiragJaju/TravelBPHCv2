var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Posts = new Schema(
  {
    Pid: String,
    Pemail: String,
    Pname: String,
    Parrival: String,
    Pdestination: String,
    PdateAndTime: {
      date: Number,
      month: Number,
      year: Number,
      hour: Number,
      min: Number,
      data: String,
    },
    Preq: [
      {
        name: String,
        email: String,
        status: String,
        carStrength: Number,
      },
    ],
    PcarStrength: Number,
    ArrivalLocation: { type: String, coordinates: [Number] },
    DestinationLocation: { type: String, coordinates: [Number] },
  },
  { typeKey: "$type" }
);
Posts.index({ ArrivalLocation: "2dsphere" });
Posts.index({ DestinationLocation: "2dsphere" });
Posts.index({ Pname: "text" });
module.exports = Posts = mongoose.model("posts", Posts);
