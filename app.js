require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var personalInfo = require('./routes/personalInfo');
var about = require('./routes/about');
var service = require('./routes/service');
var experience = require('./routes/experience');
var project = require('./routes/project');
var skill = require('./routes/skills');
var uploadRouter = require('./routes/upload');

var app = express();
const mongoose = require("mongoose");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/personalinfo', personalInfo);
app.use('/about', about);
app.use('/services', service);
app.use('/experience', experience);
app.use('/project', project);
app.use('/skill', skill);
app.use('/upload', uploadRouter);

mongoose
    .connect(process.env.URL, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected Successfully to the Database");
    })
    .catch(console.error);

//error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        success: false,
        message: err.message,
    });
});

// Undefined routes error handling
app.use((req, res, next) => {
    next(createError(404));
});

module.exports = app;
