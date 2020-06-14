"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

module.exports = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(helmet.xssFilter());
  app.get("/", (req, res) => {});

  app.use(express.static(config.root + "/public"));

  app.set("views", config.root + "/app/views");
  app.set("view engine", "ejs");

  app.use(bodyParser.json());
};
