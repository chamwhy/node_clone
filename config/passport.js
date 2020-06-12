"use strict";

const mongoose = require("mongoose");
const User = mongoose.model("User");

const local = require("./passport/local");
const google = require("./passport/google");
const twitter = require("./passport/twitter");
const facebook = require("./passport/facebook");
const github = require("./passport/github");

module.exports = (passport) => {
  passport.serializeUser((user, cb) => cb(null, user.id));
  passport.deseriallizeUser((id, cb) =>
    User.load({ critria: { _id: id } }, cb)
  );

  passport.use(local);
  passport.use(google);
  passport.use(twitter);
  passport.use(facebook);
  passport.use(github);
};
