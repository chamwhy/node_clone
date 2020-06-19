"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const port = process.env.PORT || 3000;

module.exports = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(morgan("i'm good at coding"));
  app.use(helmet.xssFilter());
  app.get("/", (req, res) => {
    res.send("faw");
  });

  app.use(express.static("http://localhost:3000/public"));

  app.set("views", "http://localhost:3000" + "/app/views");
  app.set("view engine", "ejs");

  app.use(bodyParser.json());
  app.listen(port, () => {
    console.log("start" + port);
  });
};
