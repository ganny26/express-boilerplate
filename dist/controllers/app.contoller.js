"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResponse = handleResponse;
exports.check = check;
exports.sample = sample;

function handleResponse(req, res, next) {
  var _req$myobj = req.myobj,
      statusCode = _req$myobj.statusCode,
      payload = _req$myobj.payload;
  res.status(statusCode).send(payload);
}

function check(req, res, next) {
  try {
    req.myobj = {
      statusCode: 200,
      payload: {
        status: true,
        payload: "hello from check"
      }
    };
    next();
  } catch (error) {
    req.myobj = {
      statusCode: 500,
      payload: {
        status: false,
        payload: "Internal Server Error"
      }
    };
    next();
  }
}

function sample(req, res, next) {
  req.myobj = {
    statusCode: 200,
    payload: {
      status: true,
      payload: "hello from sample"
    }
  };
  next();
}