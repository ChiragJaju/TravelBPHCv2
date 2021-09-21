var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Posts = new Schema({
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
    },
  ],
});

module.exports = Posts = mongoose.model("posts", Posts);
