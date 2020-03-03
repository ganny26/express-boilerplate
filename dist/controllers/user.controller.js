"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = user;

function user(req, res) {
  res.status(200).json({
    status: true,
    payload: {
      fname: "Peter",
      lname: "Parker"
    }
  });
}