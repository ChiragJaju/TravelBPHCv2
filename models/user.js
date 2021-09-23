var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String },
  requestsMade: [{ postId: String, requestStatus: String }],
  postToShow: [{ postId: String, requestStatus: String }],
});

module.exports = User = mongoose.model("users", User);
