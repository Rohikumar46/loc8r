"use strict";

var mongoose = require('mongoose');

var dbURI = "mongodb://0.0.0.0:27017/";

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI);
2;
mongoose.connection.on('connected', function () {
  console.log("Mongoose connected");
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function gracefulShutdown(msg, callback) {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected through ".concat(msg));
    callback();
  });
};

require('./location');