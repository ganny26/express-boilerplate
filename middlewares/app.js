const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Middleware for logging HTTP request
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

module.exports = app;
