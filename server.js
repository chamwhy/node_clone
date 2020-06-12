'use strict';

require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');

const mongoose = require('mongoose');
const passport = require('passport');

const port = process.env.PORT || 3000;
const app = express();

require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app, passport);